const mongoose = require('mongoose');
require('../config/config');

const db = async() => {
  try {
    await mongoose.connect(process.env.URLDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log('DB conectada');
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = db;