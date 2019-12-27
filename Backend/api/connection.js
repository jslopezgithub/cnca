const knex = require('knex');

module.exports = knex({
  client: 'mysql',

  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cnca'
  }

});
