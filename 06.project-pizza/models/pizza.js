const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Pizza Schema and we pass an object with all fields
const pizzaSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  idName: {
    type: String,
    // required: true,
  },
  shortDesc: {
    type: String,
    // required: true,
  },
  fullDesc: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  // pizza of the day, the black message on top of pizza
  pod: {
    type: Boolean,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  }
});

// Pizza is the name that we want to use
module.exports = mongoose.model('Pizza', pizzaSchema);
