const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ticketType: { type: String, required: true },
  seatArea: { type: String },
  price: { type: Number, required: true },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
