const {
	getAllInvoices,
	addNewInvoice,
} = require('../../models/invoices/invoices.model');

async function httpGetAllInvoices(req, res) {
	const { company_id } = req.user;

	try {
		const invoices = await getAllInvoices(company_id);
		return res.status(200).json(invoices);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

async function httpAddNewInvoice(req, res) {
	const { company_id } = req.user; // {company_id, email}
	const data = req.body;

	try {
		const created = await addNewInvoice({ company_id, ...data });
		return res.status(201).json(created);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

module.exports = {
	httpGetAllInvoices,
	httpAddNewInvoice,
};
