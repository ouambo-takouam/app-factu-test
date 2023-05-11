const { Router } = require('express');

const userRouter = require('./users/users.router');

const rootRouter = Router();

rootRouter.use('/auth', userRouter);

module.exports = rootRouter;
