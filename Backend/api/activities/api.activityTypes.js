/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
const db = require('../connection');

const tableName = 'activity_types';

function getAll(res) {
  console.log(res.method);

  return db
    .select('*')
    .from('activity_types')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
}

function getId(id, res) {
  return db(tableName)
    .select('*')
    .where('id', id)
    .then((data, err) => {
      res.send(data);
    })

    .catch(err => {
      console.log(err);
    });
}

function createType(activityName, res) {
  db.insert({ nome: activityName })
    .into(tableName)
    .then(() => {
      res.send({ message: 'OK' });
    })

    .catch(err => {
      console.log(err);
    });
}

function deleteType(_id, res) {
  db.delete()
    .where({ id: _id })
    .from(tableName)
    .then(() => {
      res.send({ message: 'OK' });
    });

  console.log(err);

  if (err.errno === 1451) {
    res.send({
      message: 'DELETE_ERR',
      details: 'CONSTRAINT ERR: Activities depends on this activity type'
    });
  }

  res.send({
    message: 'ERR'
  });
}

module.exports = (req, res) => {
  switch (req.method) {
    case 'GET':
      {
        if (!req.query.id) {
          return getAll(res);
        }
        return getId(req.query.id, res);
      }
      break;

    case 'POST':
      {
        console.log('posting');
        return createType(req.body.name, res);
      }
      break;

    case 'DELETE':
      {
        return deleteType(req.body.id, res);
      }
      break;

    default:
      getAll(req.body.name, res);
  }

  next();
};
