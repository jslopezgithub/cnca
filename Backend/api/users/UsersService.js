const db = require('../connection.js');

const getUser = function (id) {

};

const getCodiceFisicaleByNameSurname = function (name, surname) {
  return db
    .select(['codice_fisicale', 'is_deleted'])
    .from('users')
    .where({ nome: name })
    .andWhere({ cognome: surname });
};

const findUserByName = function (firstName, lastName) {

};

const getUserById = function (id) {

};

const findUserByEmail = function (firstName, lastName) {

};

const createUser = function (name, surName, email, codiceFisicale, password, image) {

};

// method return 1 - if it find pair {email:password}
// and 0 - if not
const loginUser = function (email, password) {

};

const markAsDeleted = function (id) {
  return db('users')
    .update({ is_deleted: 1 })
    .where({ id });
};

const deleteUser = function (id) {
  return db('users')
    .del()
    .where({ id });
};

module.exports = {
  findUserByEmail,
  findUserByName,
  createUser,
  getUserByCodiceFisicale,
  getUserById,
  loginUser,
  markAsDeleted,
  deleteUser
};
