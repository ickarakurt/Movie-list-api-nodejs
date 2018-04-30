require('dotenv').config();


const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.DB_HOST  + '/' + process.env.DB_NAME);
mongoose.connection.on('open', () => {
  console.log("MongoDB: Connected");
});
mongoose.connection.on('error', (err) => {
  console.log("MongoDB: Error", err);
});

