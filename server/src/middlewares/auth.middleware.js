const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	const bearerHeader = req.headers.authorization;

	console.log(bearerHeader);
	const bearer = bearerHeader.split(' ');
	const token = bearer[1];

	if (!token) {
		return res
			.status(403)
			.json({ error: 'A token is required for authentication' });
	}

	try {
		const decoded = jwt.verify(token, process.env.TOKEN_KEY);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send('Invalid Token');
	}

	return next();
};

module.exports = verifyToken;
