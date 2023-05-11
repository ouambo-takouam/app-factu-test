const { Router } = require('express');

const { httpRegister, httpLogin } = require('./users.controller.js');

const userRouter = Router();

userRouter.post('/register', httpRegister);
userRouter.post('/login', httpLogin);

module.exports = userRouter;
