const { Router } = require('express');

const authMiddleware = require('../middlewares/auth.middleware');
const userRouter = require('./users/users.router');
const companiesRouter = require('./companies/companies.router');
const customersRouter = require('./customers/customers.router');
const productsRouter = require('./products/products.router');
const invoicesRouter = require('./invoices/invoices.router');

const rootRouter = Router();

rootRouter.use('/auth', userRouter);
rootRouter.use('/companies', companiesRouter);

rootRouter.use(authMiddleware);
rootRouter.use('/customers', customersRouter);
rootRouter.use('/products', productsRouter);
rootRouter.use('/invoices', invoicesRouter);

module.exports = rootRouter;
