const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Site Schema and we pass an object with all fields
const siteSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  phone: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  }
});

// Site is the name that we want to use
module.exports = mongoose.model('Site', siteSchema);
