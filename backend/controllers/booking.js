const Booking = require('../Models/Bookings.js');

// CREATE BOOKING
export const createBooking = async (req,res) =>{
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save();
        res.status(200).send({success: true, message: "Your tour is booked", data: savedBooking})
        
    } catch (err) {
        res.status(500).send({success: false, message: "Internal server error"})
    }
}

// GET SINGLE BOOKING
export const getSingleBooking = async (req,res)=>{
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).send({success: true, message: "Successfully got booking", data: book})
    } catch (err) {
        res.status(404).send({success: false, message: "Booking not found"})
    }
}

// GET ALL BOOKINGS
export const getBookings = async (req,res)=>{
    try {
        const books = await Booking.find()
        res.status(200).send({success: true, message: "Successfully got bookings", data: books})
    } catch (err) {
        res.status(404).send({success: false, message: "Bookings not found"})
    }
}