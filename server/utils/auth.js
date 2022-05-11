const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

const newToken = id => {
  return jwt.sign({id: `${id}`}, process.env.JWT, {expiresIn: process.env.JWT_EX});
};

const checkPassword = (password, hash) => bcrypt.compare(password, hash);

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT, (err, payload) => {
      if (err) {
        return reject(err);
      }
      resolve(payload);
    });
  });

const midCheckAuth = async(req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization) {
    return res.sendStatus(401);
  }

  try {
    const verify = await verifyToken(authorization);
    req.userId = verify.id;
    console.log('auth', req.userId);
    next();
  } catch (err) {
    console.log('VERIFY', err);
    res.sendStatus(401);
  }
};

module.exports = {
  newToken,
  midCheckAuth,
  checkPassword
};