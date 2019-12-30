const connection = require('../db/connection');

const knex = require('knex')({
  client: 'mysql',

  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cnca'
  }
});


module.exports = (app) => {
  app.get('/api/roles', (req, res) => {
    const roles = knex.select().table('roles')

      .then((data) => {
        res.send(data);
      });
  });


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(orm.express(connection, {

    // define models starts here
    define(db, models, next) {
      models.roles = db.define('roles', {
        id: { type: 'serial', key: true },
        nome: { type: 'text' }
      });

      next();
    }

  }));

  // { message: RestMessages.OK, ...roles }


  // GET activities =================================
  // app.get('/api/roles', (req, res) => {

  //   req.models.roles.all({},

  //      (err, data) => {
  //       if (err) {
  //         res.send({ message: RestMessages.DATABASE_ERR, message: "Error fetching from database"});
  //         return;
  //       }

  //       res.send({ message: RestMessages.OK, ...data});

  //     }
  //   );
  // })

  app.get('/api/roles/:name', (req, res) => {
    req.models.roles.all({ nome: req.params.name },

      (err, data) => {
        if (err) {
          res.send({ message: 'DBERR', message: 'Error fetching from database' });
          return;
        }

        res.send({ message: 'OK', ...data });
      });
  });


  // ========================================================
};
