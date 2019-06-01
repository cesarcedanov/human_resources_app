const mongoose = require("mongoose");
const { Schema } = mongoose;

const Company = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String
  },
  founded: {
    type: String
  },
  email: {
    type: String,
    require: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  instagram: {
    type: String
  },
  twitter: {
    type: String
  }
});

mongoose.model("company", Company);
