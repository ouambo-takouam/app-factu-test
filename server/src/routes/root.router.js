const { Router } = require('express');

const authMiddleware = require('../middlewares/auth.middleware');
const userRouter = require('./users/users.router');
const customersRouter = require('./customers/customers.router');
const companiesRouter = require('./companies/companies.router');

const rootRouter = Router();

rootRouter.use('/auth', userRouter);

rootRouter.use(authMiddleware);
rootRouter.use('/customers', customersRouter);
rootRouter.use('/companies', companiesRouter);

module.exports = rootRouter;
