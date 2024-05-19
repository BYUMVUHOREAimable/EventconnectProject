
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user');
const validateUser = require('../Models/valid')
require('dotenv').config()

router.post('/', async (req, res) => {
  try {

    const data = validateUser(req.body);
    console.log(data);
    if (data.error) {
      return res.status(400).send({ error: data.error.details[0].message });
    }
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      fullName: req.body.fullName,
      phoneNumber: req.body.phoneNumber,
    });

    await user.save();

    const token = jwt.sign({ _id: user._id, email: user.email, phone: user.phoneNumber }, process.env.JWT_SECRET);

    res.status(201).send({ token: token, message: "account created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
