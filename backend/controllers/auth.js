
const express = require('express')
const passport = require('passport')
require('dotenv').config();
const router = express.Router()

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/google/callback', passport.authenticate('google',{
    failureRedirect: `${process.env.FRONTEND_URL}/authentication`
}), (req,res) => {
    res.redirect(`${process.env.FRONTEND_URL}/dashboard`)
})

module.exports = router;
