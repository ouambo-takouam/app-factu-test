const Customer = require('./customers.mongo');

async function getAllCustomers() {
	return await Customer.findOne({});
}

async function addNewCustomer(data) {
	return await Customer.create(data);
}

module.exports = {
	getAllCustomers,
	addNewCustomer,
};
