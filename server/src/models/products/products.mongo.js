const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	company_id: { type: String, required: true },
	type: { type: String, required: true },
	name: { type: String, required: true },
	description: { type: String },
	qte: { type: Number, required: true },
	price: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);
