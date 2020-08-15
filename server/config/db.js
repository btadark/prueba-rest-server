const mongoose = require('mongoose');

const db = async() => {
  try {
    await mongoose.connect('mongodb://localhost:27017/cafe', {
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