const mongoose = require('mongoose');
require('dotenv').config();

const connectToDatabase = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_MINE, connectionParams)
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((error) => {
            console.log(`An error occurred:\n ${error}\nCould not connect to database`);
        });
};

module.exports = connectToDatabase;

