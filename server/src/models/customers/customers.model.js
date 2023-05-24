const Customer = require('./customers.mongo');

async function getOneCustomer(id) {
	return await Customer.findById(id).exec();
}

async function getAllCustomers(company_id) {
	return await Customer.find({ company_id }).exec();
}

async function addNewCustomer(data) {
	return await Customer.create(data);
}

async function updateOneCustomer(data) {
	await Customer.updateOne({ _id: data._id }, data);

	return await getOneCustomer(data._id);
}

module.exports = {
	getAllCustomers,
	addNewCustomer,
	updateOneCustomer,
};
