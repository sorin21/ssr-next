const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User Schema and we pass an object with all fields
const userSchema = new Schema({
  firstname: {
    type: String,
    // required: true
  },
  lastname: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  }
});

// users is the name that we want to use
module.exports = mongoose.model('User', userSchema);
