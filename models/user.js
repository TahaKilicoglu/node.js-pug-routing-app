const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Kullanıcı şeması
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Kullanıcı modelini oluşturma
const User = mongoose.model('User', userSchema);

module.exports = User;
