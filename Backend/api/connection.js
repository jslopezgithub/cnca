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
