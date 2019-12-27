const orm = require('orm');
const bodyParser = require('body-parser');
const connection = require('../db/connection');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(orm.express(connection, {

    // define models starts here
    define(db, models, next) {
      models.users = db.define('users', {
        id: { type: 'serial', key: true },
        nome: { type: 'text' }
      });

      next();
    }

  }));

  // GET activities =================================
  app.get('/api/users', (req, res) => {
    req.models.users.all({},

      (err, data) => {
        if (err) {
          res.send({
            message: RestMessages.DATABASE_ERR,
            message: 'Error fetching from database'
          });
          return;
        }

        res.send({ message: RestMessages.OK, ...data });
      });
  });


  app.get('/api/users/:id', (req, res) => {
    req.models.users.all({ id: req.params.id },

      (err, data) => {
        if (err) {
          res.send({ message: 'DBERR', message: 'Error fetching from database' });
          return;
        }

        res.send({ message: 'OK', ...data });
      });
  });


  app.post('/api/users', (req, res) => {
    if (req.body.name == '') { res.send({ message: 'EMPTY' }); }

    req.models.users.create(req.body, (err, data) => {
      if (err) {
        res.send({ message: 'ERROR', ...err });
        return;
      }

      res.send({ message: 'OK' });
    });
  });


  app.delete('/api/users/:id', (req, res) => {
    console.log('deleting: ', req.params.id);

    req.models.users.find({
      id: req.params.id
    }).remove((err) => {
      console.log(`removing ${req.params.id}`);

      if (err) {
        console.log(err);
      }

      res.send({ message: 'OK' });
    });
  });
};
