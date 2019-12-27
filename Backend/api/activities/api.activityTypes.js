const db = require('../connection');

const table = {
  tableName: 'activity_types',
  nameColumn: 'nome',
  idColumn: 'id'
};

function getAll(res) {
  return db
    .select()
    .from(table.tableName)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      console.log(err);
    });
}

function getId(id, res) {
  return db
    .select()
    .from(table.tableName)
    .where(table.idColumn, id)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      console.log(err);
    });
}

function createType(activityName, res) {
  db.insert({ nome: activityName })
    .into(table.tableName)
    .then((data) => {
      res.send({ message: 'OK' });
    })

    .catch((err) => {
      console.log(err);
    });
}

function deleteType(_id, res) {
  db
    .delete()
    .where({ id: _id })
    .from(table.tableName)
    .then(() => {
      res.send({ message: 'OK' });
    })
    .catch((err) => {
      console.log(err);

      if (err.errno == 1451) {
        res.send({
          message: 'DELETE_ERR',
          details: 'CONSTRAINT ERR: Activities depends on this activity type'
        });
      }

      res.send({
        message: 'ERR'
      });
    });
}


const typeApi = (req, res, next) => {
  switch (req.method) {
    case 'GET': {
      console.log(req.query.id);

      if (!req.query.id) {
        getAll(res);
      }

      getId(req.query.id, res);
      return;
    } break;

    case 'POST': {
      console.log('posting');

      createType(req.body.name, res);
    } break;

    case 'DELETE': {
      deleteType(req.body.id, res);
    } break;

    default: getAll(req.body.name, res);
  }

  // next();
};

module.exports = typeApi;
