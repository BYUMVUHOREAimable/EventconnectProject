const express = require('express');
const router = express.Router();
const Payment = require('../Models/payment');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Ticket = require("../Models/ticket");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");
const nodemailer = require("nodemailer");

const CLIENT_URL = `${process.env.REACT_APP_API_URL}/v1/api/payment`;

const generateTicketPDF = async (ticketInfo) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([400, 250]);
  await ticketInfo.populate('user');
  const username = ticketInfo.user.username;
  const ticketType = ticketInfo.ticketType;
  const seatArea = ticketInfo.seatArea || 'N/A';
  const price = ticketInfo.price;

  page.drawText('Ticket Details', {
    x: 150,
    y: 220,
    size: 20,
    color: rgb(0.2, 0.84, 0.67),
    font: await pdfDoc.embedFont(StandardFonts.TimesRomanBold),
  });

  page.drawLine({
    start: { x: 50, y: 210 },
    end: { x: 350, y: 210 },
    thickness: 1,
    color: rgb(0.2, 0.84, 0.67),
  });

  // Add ticket details
  page.drawText(`Name: ${username}`, {
    x: 50,
    y: 160,
    size: 12,
    color: rgb(0, 0, 0),
  });
  page.drawText(`Ticket Type: ${ticketType}`, {
    x: 50,
    y: 140,
    size: 12,
    color: rgb(0, 0, 0),
  });
  page.drawText(`Seat Area: ${seatArea}`, {
    x: 50,
    y: 120,
    size: 12,
    color: rgb(0, 0, 0),
  });
  page.drawText(`Price: $${price}`, {
    x: 50,
    y: 100,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('Thank you for your purchase!', {
    x: 100,
    y: 60,
    size: 10,
    color: rgb(0.5, 0.5, 0.5),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

const sendEmailWithLink = async (email, link) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: 'Your Ticket',
    text: `Thanks for your payment. Please download your ticket using the following link: ${link}`,
  };

  await transporter.sendMail(mailOptions);
};

router.post('/', async (req, res) => {
  try {
    const { token, seatArea, user, eventOrBooking, eventType, amount, ticketType } = req.body;

    const newPayment = new Payment({
      user,
      eventOrBooking,
      eventType,
      paymentMethod: token,
      amount,
    });

    const charge = await stripe.charges.create({
      amount: amount, // amount in cents
      currency: 'usd',
      source: token, // token obtained from Stripe.js
      description: `Charge for ${eventOrBooking}`,
    });

    if (charge.status === 'succeeded') {
      const newTicket = new Ticket({
        event: eventOrBooking,
        user,
        ticketType,
        price: amount,
        seatArea,
      });

      const ticketPDF = await generateTicketPDF(newTicket);
      const filePath = `./tickets/ticket-${Date.now()}.pdf`;
      const downloadLink = `${CLIENT_URL}/download?file=${encodeURIComponent(filePath)}`;
      fs.writeFileSync(filePath, ticketPDF);

      await newTicket.populate('user');
      await sendEmailWithLink(newTicket.user.email, downloadLink);
      await newPayment.save();
      await newTicket.save();

      res.status(200).send({
        message: 'Payment successful, ticket generated',
        downloadLink,
      });
    } else {
      res.status(500).send({ message: 'Payment failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

router.get('/download', (req, res) => {
  const filePath = decodeURIComponent(req.query.file);
  res.download(filePath, 'ticket.pdf', (err) => {
    if (err) {
      res.status(500).send({ message: 'Error downloading file', err });
    }
  });
});

module.exports = router;
