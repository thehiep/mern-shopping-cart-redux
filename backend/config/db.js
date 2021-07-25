require('dotenv').config();
const mongoose = require('mongoose');

const connecDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL');
        console.log(error);
        process.exit(1);
    }
}

// 
module.exports = connecDB;