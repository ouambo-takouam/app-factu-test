const Customer = require('./customers.mongo');

async function getAllCustomers() {
	return await Customer.findOne({});
}

async function addNewCustomer() {
	return await Customer.findOne({});
}
