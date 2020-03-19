const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const UserSchema = new Schema({
    email: {
      type: String,
      required: [true, 'User must have an email']
    }
})
  
//create model for todo
const User = mongoose.model('User', UserSchema);

module.exports = User;