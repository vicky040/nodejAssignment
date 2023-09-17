const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  mobile: {
    type: String
  },
  country_code: {
    type: String
  },
  date_of_birth: {
    type: Date
  },
  status: {
    type: Number,
    default: 1
  },

}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'last_updated' }
});





const User = mongoose.model('User', userSchema);

module.exports = User;
