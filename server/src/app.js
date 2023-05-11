const express = require('express');
const cors = require('cors');

const app = express();

const rootRouter = require('./routes/root.router');

app.use(cors());
app.use(express.json());

app.use('/api/v1', rootRouter);

module.exports = app;
