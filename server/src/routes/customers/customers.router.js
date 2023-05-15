const { Router } = require('express');

const {
	httpGetAllCustomers,
	httpAddNewCustomer,
} = require('./customers.controller');

const customersRouter = Router();

customersRouter.get('/', httpGetAllCustomers);
customersRouter.post('/', httpAddNewCustomer);

module.exports = customersRouter;
