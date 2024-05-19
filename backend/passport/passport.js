
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require('../Models/user');
require('dotenv').config();

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Find an existing user with the provided email
        const existingUser = await User.findOne({ email: profile.emails[0].value });
    
        if (existingUser) {
            // Check if the existing user is signed in with a different auth provider
            if (existingUser.authProvider !== 'google') {
                // If the account exists but is not using Google auth, return an error message
                return done(null, false, { message: "This email is already associated with an account signed in using a different method." });
            }
            // If the user exists and is using Google auth, return the user
            return done(null, existingUser);
        }
    
        // Create a new user if it doesn't exist
        const newUser = new User({
            username: profile.displayName,
            email: profile.emails[0].value,
            authProvider: 'google',
            googleId: profile.id,
            fullName: profile.displayName,
            // Add other user properties if needed
        });
        
        // Save the new user to db
        await newUser.save();
        done(null, newUser);
    } catch (error) {
        console.error('Error in Google login:', error);
        done(error);
    }
    
    })
);

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
      // Retrieve user from your database by ID
      const user = await User.findById(id);
      done(null, user);
  } catch (err) {
      done(err, null);
  }
});
