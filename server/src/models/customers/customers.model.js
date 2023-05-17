const Customer = require('./customers.mongo');

async function getAllCustomers() {
	return await Customer.find({});
}

async function addNewCustomer(data) {
	return await Customer.create(data);
}

module.exports = {
	getAllCustomers,
	addNewCustomer,
};
