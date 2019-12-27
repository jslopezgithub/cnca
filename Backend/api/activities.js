const orm = require('orm');
const knex = require('knex');
const bodyParser = require('body-parser');
const connection = require('../db/connection');

const RestMessages = {
  OK: 'OK',
  ERROR: 'ERROR',
  DATABASE_ERR: 'DB_ERROR',
  VALIDATION_ERROR: 'VALIDATION ERROR'
};

// app - express application
module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(orm.express(connection, {

    // define models starts here
    define(db, models, next) {
      models.activityType = db.define('activity_types', {
        id: { type: 'serial', key: true },
        nome: { type: 'text' }
      });

      models.activities = db.define('activities', {
        id: { type: 'serial', key: true },
        activity_date: { type: 'date' },
        start_time: { type: 'date', time: true },
        end_time: { type: 'date', time: true },
        volunteer_id: { type: 'number' },
        activity_type_id: { type: 'number' }
      });

      next();
    }

  }));


  // GET activities =================================
  app.get('/api/activities', (req, res) => {
    req.models.activityType.all({},

      (err, data) => {
        if (err) {
          res.send({ message: RestMessages.DATABASE_ERR, message: 'Error fetching from database' });
          return;
        }

        res.send({ message: RestMessages.OK, ...data });
      });
  });

  app.get('/api/activities/:id', (req, res) => {
    req.models.activityType.all({ id: req.params.id },

      (err, data) => {
        if (err) {
          res.send({ message: 'DBERR', message: 'Error fetching from database' });
          return;
        }

        res.send({ message: 'OK', ...data });
      });
  });

  app.post('/api/activities', (req, res) => {
    if (req.body.name == '') { res.send({ message: 'EMPTY' }); }

    req.models.activityType.create(req.body, (err, data) => {
      if (err) {
        res.send({ message: 'ERROR', ...err });
        return;
      }

      res.send({ message: 'OK' });
    });
  });

  app.delete('/api/activities/types/:id', (req, res) => {
    console.log('deleting: ', req.params.id);

    req.models.activityType.find({
      id: req.params.id
    }).remove((err) => {
      console.log(`removing ${req.params.id}`);

      if (err) {
        console.log(err);
      }

      res.send({ message: 'OK' });
    });
  });
  // ========================================================


  // GET TYPES ===========================================
  app.get('/api/activities', (req, res) => {
    req.models.activityType.all({ },

      (err, data) => {
        if (err) {
          res.send({ message: 'DBERR', message: 'Error fetching from database' });
          return;
        }

        res.send({ message: 'OK', ...data });
      });
  });

  app.get('/api/activities/types/:id', (req, res) => {
    req.models.activityType.all({ id: req.params.id },

      (err, data) => {
        if (err) {
          res.send({ message: 'DBERR', message: 'Error fetching from database' });
          return;
        }

        res.send({ message: 'OK', ...data });
      });
  });

  app.post('/api/activities', (req, res) => {
    req.models.activities.create(req.body, (err, data) => {
      if (err) {
        res.send({ message: 'ERROR', ...err });
        return;
      }

      res.send({ message: 'OK' });
    });
  });

  app.delete('/api/activities/:id', (req, res) => {
    console.log('deleting: ', req.params.id);

    req.models.activities.find({
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
