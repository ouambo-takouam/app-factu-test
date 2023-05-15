const { Router } = require('express');

const userRouter = require('./users/users.router');
const customersRouter = require('./customers/customers.router');

const rootRouter = Router();

rootRouter.use('/auth', userRouter);
rootRouter.use('/customers', customersRouter);

module.exports = rootRouter;
