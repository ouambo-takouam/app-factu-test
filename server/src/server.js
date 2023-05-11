require('dotenv').config();

const http = require('http');

const app = require('./app');

const PORT = process.env.PORT;

const mongoConnect = require('./services/mongo');

const server = http.createServer(app);

mongoConnect();

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
