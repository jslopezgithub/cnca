const knex = require('knex');

module.exports = knex({
  client: 'mysql',

  connection: {
    host: 'localhost',
    user: 'root',
    password: '12204900',
    database: 'cnca'
  }

});


module.exports.raw = {
  host: 'localhost',
  user: 'root',
  password: '12204900',
  database: 'cnca'
};
