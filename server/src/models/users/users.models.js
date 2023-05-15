const User = require('./users.mongo');

async function getOneUser(email) {
	return await User.findOne({ email });
}

async function addNewUser(data) {
	const { first_name, last_name, email, password } = data;

	return await User.create({
		first_name,
		last_name,
		email,
		password,
	});
}

module.exports = { getOneUser, addNewUser };
