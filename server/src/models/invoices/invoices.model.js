const Invoice = require('./invoices.mongo');

async function getAllInvoices(company_id) {
	return await Invoice.find({ company_id }).exec();
}

async function getInvoicesByCustomer(company_id, customer_id) {
	return await Invoice.find({ company_id, customer_id }).exec();
}

async function addNewInvoice(data) {
	return await Invoice.create(data);
}

module.exports = {
	getAllInvoices,
	getInvoicesByCustomer,
	addNewInvoice,
};
