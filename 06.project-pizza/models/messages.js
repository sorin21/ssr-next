const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User Schema and we pass an object with all fields
const messagesSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true,
  },
  message: {
    type: String,
    // required: true,
  }
});

// users is the name that we want to use
module.exports = mongoose.model('Messages', messagesSchema);
