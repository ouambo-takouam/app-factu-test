const User = require('./users.mongo');

async function getOneUser(email) {
	return await User.findOne({ email });
}

async function addNewUser(data) {
	return await User.create(data);
}

module.exports = { getOneUser, addNewUser };
