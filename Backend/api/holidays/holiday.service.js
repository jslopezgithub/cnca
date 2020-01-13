const mysql = require('mysql');

const moment = require('moment');
const db = require('../connection');


function isHoliday(date, callback) {
  const day = moment(date).format('-MM-DD');
  const conn = mysql.createConnection(db.raw);
  return conn.connect((err) => conn.query(`SELECT * FROM holidays where holiday LIKE ('%${day}')`, (err, result) => {
    if (typeof (callback) === 'function') callback(err, JSON.parse(JSON.stringify(result)));
  }));
}

function getAll() {
  return db('holidays').select(['id', 'holiday']);
}

function getById(id) {
  return db.select(['id', 'holiday', 'nome'])
  .from('holidays')
  .where({ id });
}

function createHoliday(sholiday, continuous = 0, name = undefined) {
  // console.log(continuous);

  return db('holidays').insert({
    holiday: sholiday,
    is_continious: continuous,
    nome: name // inserts NULL into name field
  });
}

function deleteHoliday(date_id) {
  return db('holidays')
    .where('id', date_id)
    .del();
}

module.exports = {
  isHoliday,
  createHoliday,
  deleteHoliday,
  getAll,
  getById
};
