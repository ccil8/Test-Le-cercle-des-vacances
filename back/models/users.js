const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, max: 80 },
    password: { type: String, required: true, max: 30 },
    admin: { type: Boolean },
  },
);


module.exports = mongoose.model('User', UserSchema);