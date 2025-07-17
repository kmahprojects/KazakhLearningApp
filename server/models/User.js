const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
name: { type: String, required: true },
country: { type: String, required: true },
latinCountry: { type: String, required: true },
kzCountry: { type: String, required: true },
selected: {type: Boolean, required: true, default: false}
});
module.exports = mongoose.model('User', UserSchema);