const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

const newToken = user =>
  jwt.sign({id: user.id}, process.env.JWT, {expiresIn: process.env.JWT_EX});

const checkPassword = (password, hash) => bcrypt.compare(password, hash);

const midCheckAuth = async(req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization) {
    return res.sendStatus(401).json({ msg: 'Authorization Denied' });
  }

  try {
    console.log(authorization);
    const verify = jwt.verify(authorization, process.env.JWT);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = {
  newToken,
  midCheckAuth,
  checkPassword
};