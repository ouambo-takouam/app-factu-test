const { addNewCompany } = require('../../models/companies/companies.model');

async function httpAddNewCompany(req, res) {
	try {
		const added = await addNewCompany();
		return res.status(200).json(added);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

module.exports = { httpAddNewCompany };
