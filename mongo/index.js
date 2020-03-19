//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = process.env.DB || 'mongodb://127.0.0.1/nest';

//connect to the database
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));