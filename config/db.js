const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1);
  }
};

module.exports = connectDB;
