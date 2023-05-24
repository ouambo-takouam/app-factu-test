const Customer = require('./customers.mongo');

async function getOneCustomer(id) {
	return await Customer.findById(id).exec();
}

async function getAllCustomers(company_id) {
	return await Customer.find({ company_id }).exec();
}

async function addNewCustomer(company_id, data) {
	return await Customer.create({ company_id, ...data });
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
