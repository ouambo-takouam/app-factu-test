const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	company_id: { type: String, required: true },
	name: { type: String, required: true },
	qte: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
