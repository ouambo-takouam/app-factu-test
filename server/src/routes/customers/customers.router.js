const { Router } = require('express');

const {
	httpGetAllCustomers,
	httpAddNewCustomer,
	httpUpdateOneCustomer,
} = require('./customers.controller');

const customersRouter = Router();

customersRouter.get('/', httpGetAllCustomers);
customersRouter.post('/', httpAddNewCustomer);
customersRouter.patch('/', httpUpdateOneCustomer);

module.exports = customersRouter;
