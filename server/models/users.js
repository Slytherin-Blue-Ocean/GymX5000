const { pool } = require('../utils/db');
const bcrypt = require('bcrypt');

const checkUserAlreadyExists = async email => {
  try {
    return await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  } catch (err) {
    console.error('USER_EXISTS', err);
  }
};

const getUserPassword = async email => {
  try {
    return await pool.query('SELECT id, email, password FROM users WHERE email = $1', [email]);
  } catch (err) {
    console.error('USER_EXISTS', err);
  }
};

const createUser = async(email, password, first_name, last_name, address) => {
  try {
    return await pool.query(
      'INSERT INTO users (email, password, first_name, last_name, address) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [email, bcrypt.hashSync(password, bcrypt.genSaltSync(10), null), first_name, last_name, address]
    );
  } catch (err) {
    console.log('CREATE_USER', err);
  }
};

const getUser = async(req, res) => {

};

module.exports = {
  checkUserAlreadyExists,
  getUserPassword,
  createUser,
  getUser
};