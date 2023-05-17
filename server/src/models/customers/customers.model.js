const Customer = require('./customers.mongo');

async function getAllCustomers(user_id) {
	return await Customer.find({ user_id }).exec();
}

async function addNewCustomer(user_id, data) {
	return await Customer.create({ user_id, ...data });
}

module.exports = {
	getAllCustomers,
	addNewCustomer,
};
