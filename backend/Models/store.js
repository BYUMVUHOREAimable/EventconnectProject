const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  capacity: { type: Number, required: true },
  amenities: { type: [String] },
  offers: { type: [String] },
  imageUrls: { type: [String] }, // Add a field to store image identifiers or URLs in Firebase
});

const Venue = mongoose.model('Venue', venueSchema);

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue', required: true },
  ticketPrices: { type: [Number], required: true },
  description: { type: String },
  imageUrls: { type: [String] }, // Add a field to store image identifiers or URLs in Firebase
});

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event, Venue };
