const {
	getAllCustomers,
	addNewCustomer,
} = require('../../models/customers/customers.model');

async function httpGetAllCustomers(req, res) {
	try {
		const customers = await getAllCustomers();
		return res.status(200).json(customers);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

async function httpAddNewCustomer(req, res) {
	try {
		const created = await addNewCustomer(req.body);
		return res.status(201).json(created);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

module.exports = { httpGetAllCustomers, httpAddNewCustomer };
