const express = require('express');

const app = express();

const rootRouter = require('./routes/root.router');

app.use(express.json());

app.use('/api/v1', rootRouter);

module.exports = app;
