const User = require('./users.mongo');

async function getUser(email) {
	return await User.findOne({ email });
}

async function createUser(data) {
	const { first_name, last_name, email, password } = data;

	return await User.create({
		first_name,
		last_name,
		email,
		password,
	});
}

module.exports = { getUser, createUser };
