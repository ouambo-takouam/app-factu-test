const { Router } = require('express');

const {
	httpGetAllInvoices,
	httpAddNewInvoice,
} = require('./invoices.controller');

const invoicesRouter = Router();

invoicesRouter.get('/', httpGetAllInvoices);
invoicesRouter.post('/', httpAddNewInvoice);

module.exports = invoicesRouter;
