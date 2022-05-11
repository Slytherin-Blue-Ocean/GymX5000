const { Router } = require('express');
const router = Router();
const { getUser } = require('../controllers/users');

router.get('/user', getUser);

module.exports = {
  router
};