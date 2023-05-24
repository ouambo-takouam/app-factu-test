const Company = require('./companies.mongo');

async function addNewCompany() {
	return await Company.create({ name: generateCompanyName(5) });
}

function generateCompanyName(length) {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	var result = ' ';

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
}

module.exports = { addNewCompany };
