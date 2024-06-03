// Assuming you have an Express router set up

const express = require('express');
const router = express.Router();
const Payment = require('../Models/payment');
const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY)
const Ticket=require("../Models/ticket")
const {PDFDocument,rgb} =require("pdf-lib")
const fs=require("fs")
const nodemailer=require("nodemailer")

const CLIENT_URL='http://localhost:5000/v1/api/payment'
const generateTicketPDF=async(ticketInfo)=>{
  const pdfDoc=await PDFDocument.create();
  const page = pdfDoc.addPage([400, 200]);
  await ticketInfo.populate('user')
  const username=ticketInfo.user.username
  
  page.drawText(`Ticket for ${username}`, {
    x: 50,
    y: 150,
    size: 18,
    color: rgb(0, 0.53, 0.71),
  });
  page.drawText(`Name: ${ticketInfo.ticketType}`, { x: 50, y: 120, size: 12 });
  page.drawText(`SeatArea: ${ticketInfo.seatArea}`, { x: 50, y: 100, size: 12 });
  page.drawText(`Price: ${ticketInfo.price}`, { x: 50, y: 80, size: 12 });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
const sendEmailWithLink = async (email, link) => {
 console.log(process.env.MY_EMAIL)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email service provider
    port:465,
    secure:true,
    auth: {
      user: process.env.MY_EMAIL, // Your email address
      pass: process.env.MY_PASSWORD, // Your email password
    },
  
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your Ticket',
    text: ` Thanks for you payment Please download your ticket using the following link: ${link}`,
  };

  await transporter.sendMail(mailOptions);
};

// POST route for handling payments
router.post('/', async (req, res) => {
  try {
    const {seatArea, user, eventOrBooking, eventType, paymentMethod, amount,ticketType } = req.body;

    // Validate payment data (e.g., check if user exists, event/booking is valid, etc.)

    // Create a new Payment instance
    const newPayment = new Payment({
      user,
      eventOrBooking,
      eventType,
      paymentMethod,
      amount,
    
    });
    // console.log(stripe)
    const charge = await stripe.charges.create({
      amount: amount, // amount in cents
      currency: 'usd',
      source: "tok_visa", // token obtained with Stripe.js
      description: 'Charge for  test@example.com',
    });
    
    
if (charge.status==='succeeded'){
  
  const newTicket = new Ticket({
    event: eventOrBooking, // Assuming eventOrBooking is the event ID
    user,
    ticketType: ticketType, // Assuming eventType represents the type of ticket
    price: amount,
    seatArea
    // You can add more fields like seatArea if needed
  });
  
  const ticketPDF= await generateTicketPDF(newTicket)
  const filePath = `./tickets/ticket-${Date.now()}.pdf`;
  const downloadLink= `${CLIENT_URL}/download?file=${encodeURIComponent(filePath)}`
  fs.writeFileSync(filePath, ticketPDF);
  await newTicket.populate('user')
  await sendEmailWithLink(newTicket.user.email, downloadLink);
  await newPayment.save()
  await newTicket.save()
  res.status(200).send({
    message: 'Payment successful, ticket generated',
    downloadLink
  });

  
  
}
else{
  res.status(500).send({ message: 'Payment failed' });
}

    // Save the payment to the database
     
    
    // Update relevant data (e.g., event/booking status)

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
