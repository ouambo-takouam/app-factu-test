const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
	first_name: { type: String },
	last_name: { type: String },
	display_name: { type: String },
	email: { type: String },
	phone1: { type: String },
	phone2: { type: String },
	website: { type: String },
	street: { type: String },
	town: { type: String },
	state: { type: String },
	po_box: { type: String },
	country: { type: String },
	notes: { type: String },
	payment_mode: { type: String, default: 'cash' },
	preferred_shipping_method: { type: String, default: 'none' },
	condition: { type: String, default: 'due_on_receipt' },
	attachment: { type: String },
});

module.exports = mongoose.model('Customer', customerSchema);
