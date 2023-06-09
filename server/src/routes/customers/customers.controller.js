const {
	getAllCustomers,
	addNewCustomer,
	updateOneCustomer,
} = require('../../models/customers/customers.model');

async function httpGetAllCustomers(req, res) {
	const { company_id } = req.user;

	try {
		const customers = await getAllCustomers(company_id);
		return res.status(200).json(customers);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

async function httpAddNewCustomer(req, res) {
	const { company_id } = req.user; // {company_id, email}
	const data = req.body;

	try {
		const created = await addNewCustomer({ company_id, ...data });
		return res.status(201).json(created);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

async function httpUpdateOneCustomer(req, res) {
	const data = req.body;

	try {
		const updated = await updateOneCustomer(data);
		return res.status(200).json(updated);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

module.exports = {
	httpGetAllCustomers,
	httpAddNewCustomer,
	httpUpdateOneCustomer,
};
