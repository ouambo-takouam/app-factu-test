const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	productId: { type: String },
	description: { type: String },
	qte: { type: String },
	price: { type: String },
});

const invoiceSchema = new mongoose.Schema({
	company_id: { type: String, required: true },
	customer_id: { type: String, required: true },
	invoice_number: { type: String, required: true },
	email: { type: String },
	address: { type: String },
	invoice_date: { type: String, required: true },
	due_date: { type: String },
	delivery_type: { type: String },
	delivery_value: { type: Number },
	products: [productSchema],
});

module.exports = mongoose.model('Invoice', invoiceSchema);
