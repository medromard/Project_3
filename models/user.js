const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: string,
    default: ''
  },
  lastName: {
    type: string,
    default: ''
  },
  email: {
    type: string,
    default: ''
  },
  Password: {
    type: string,
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false
  },

});

module.exports = mongoose.model('User', UserSchema);
