const orm = require('orm');

const opts = {
  user: 'root',
  pass: '',
  host: 'localhost',
  database: 'cnca',
  protocol: 'mysql',
  port: '3306',
  query: { pool: true }
};

function connect(fn) {
  orm.connect(opts, (err, db) => {
    if (err) return err;
    fn(db);
  });
}

module.exports = connect;
