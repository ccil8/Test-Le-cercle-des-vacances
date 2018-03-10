const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, max: 80 },
    password: { type: String, required: true, max: 30 },
    admin: { type: Boolean },
  },
);

// Virtual for User's full name
UserSchema
  .virtual('name')
  .get(function () {
    return `${this.firstname} ${this.lastname}`;
  });


// Export model
module.exports = mongoose.model('User', UserSchema);