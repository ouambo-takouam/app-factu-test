const { Router } = require('express');

const { httpAddNewCompany } = require('./companies.controller');

const companiesRouter = Router();

companiesRouter.post('/', httpAddNewCompany);

module.exports = companiesRouter;
