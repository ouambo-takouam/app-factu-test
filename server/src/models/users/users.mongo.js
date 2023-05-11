const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	level: { type: String, default: 'admin' },
});

module.exports = mongoose.model('User', userSchema);
