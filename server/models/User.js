const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  class_name: {
    type: String,
    required: true,
  },
  graduate_id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    trim: true,
  },
  image_name: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  zip: {
    type: String,
  },
  about_me: {
    type: String,
  },
  quote: {
    type: String,
  },
  field_interest: {
    type: String,
  },
  tech_skills: {
    type: Array,
    default: [],
  },
  seeking: {
    type: String,
  },
  personal_website: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  xing: {
    type: String,
  },
});

module.exports = User = mongoose.model("graduate", UserSchema);
