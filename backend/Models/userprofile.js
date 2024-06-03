const mongoose = require('mongoose');

const profilePictureSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  displayName: { type: String },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ProfilePicture = mongoose.model('ProfilePicture', profilePictureSchema);
module.exports = ProfilePicture;
