const mongoose = require('mongoose');

const employeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
    default:"Male",
  },
  profilePhoto: {
    type: String  // Assuming the profile photo is stored as a file path or URL
  }
},{timestamps:true});

const employeModel = mongoose.model('employe', employeSchema);

module.exports = employeModel;
