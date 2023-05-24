const { Router } = require('express');

const authMiddleware = require('../middlewares/auth.middleware');
const userRouter = require('./users/users.router');
const customersRouter = require('./customers/customers.router');
const companiesRouter = require('./companies/companies.router');

const rootRouter = Router();

rootRouter.use('/auth', userRouter);
rootRouter.use('/companies', companiesRouter);

rootRouter.use(authMiddleware);
rootRouter.use('/customers', customersRouter);

module.exports = rootRouter;
