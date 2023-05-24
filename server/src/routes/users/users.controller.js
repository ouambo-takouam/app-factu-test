const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { getOneUser, addNewUser } = require('../../models/users/users.models');

async function httpRegister(req, res) {
	try {
		// Get user input
		const { company_id, first_name, last_name, email, password } = req.body;

		// Validate user input
		if (!company_id || !first_name || !last_name || !email || !password) {
			return res.status(400).json({ error: 'All input are required' });
		}

		// check if user already exist
		// Validate if user exist in our database
		const oldUser = await getOneUser(email);

		if (oldUser) {
			return res
				.status(409)
				.json({ error: 'User Already Exist. Please Login' });
		}

		// Encrypt user password
		encryptedPassword = await bcrypt.hash(password, 10);

		// Create user in our database
		const user = await addNewUser({
			company_id,
			first_name,
			last_name,
			email,
			password: encryptedPassword,
		});

		// Create token
		const token = generateToken({
			company_id: user.company_id,
			email,
		});

		// return new user
		return res.status(201).json({ credentials: user, token });
	} catch (err) {
		console.log(err);
	}
}

async function httpLogin(req, res) {
	try {
		// Get user input
		const { email, password } = req.body;

		// Validate user input
		if (!email || !password) {
			return res.status(400).json({ error: 'All input are required' });
		}

		// Validate if credentials are correct
		const user = await getOneUser(email);

		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(400).json({ error: 'Invalid Credentials' });
		}

		const token = generateToken({
			company_id: user.company_id,
			email,
		});

		return res.status(200).json({ credentials: user, token });
	} catch (err) {
		console.log(err);
	}
}

function generateToken(data) {
	return jwt.sign(data, process.env.TOKEN_KEY);
}

module.exports = { httpRegister, httpLogin };
