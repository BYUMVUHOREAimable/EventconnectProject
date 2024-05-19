const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventOrBooking: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'eventType',
    required: true,
  },
  eventType: { type: String, enum: ['Event', 'Booking'], required: true },
  paymentMethod: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
