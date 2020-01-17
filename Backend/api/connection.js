const knex = require('knex');

module.exports = knex({
  client: 'mysql',

  connection: {
    host: 'localhost',
    user: 'cnca',
    password: 'cnca',
    database: 'cnca'
  }
});

module.exports.raw = {
  host: 'localhost',
  user: 'root',
  password: '12204900',
  database: 'cnca'
};
