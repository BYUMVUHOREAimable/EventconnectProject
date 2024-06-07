
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Make password optional
  authProvider: { type: String, enum: ['local', 'google'], default: 'local' }, // Default is 'local'
  googleId: { type: String, unique: true, sparse: true },
  fullName: { type: String }
  // phoneNumber: { type: String },
  // Additional properties can be added as per your requirements
});

const User = mongoose.model('User', userSchema);
module.exports = User;
