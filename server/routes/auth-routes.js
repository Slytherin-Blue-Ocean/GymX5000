const { Router } = require('express');
const authRouter = Router();
const { signUp, signIn } = require('../controllers/users');

authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);

module.exports = {
  authRouter
};