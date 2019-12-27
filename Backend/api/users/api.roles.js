const db = require('../connection');

const tableContents = {
  tableName: 'roles',
  columnName: 'nome',
  idName: 'id'
};

function getRoles(res) {
  db
    .select()
    .from('roles')
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {

    });
}

function getRole(id, res) {
  return db
    .select()
    .from(tableContents.tableName)
    .where({ id })
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.send({ message: 'ERROR', description: err });
    });
}

const rolesApi = (req, res, next) => {
  switch (req.method) {
    case 'GET': {
      if (req.query.id) {
        getRole(req.query.id, res);
        return;
      }

      getRoles(res);
    } break;

    default: getRoles(res);
  }
};

module.exports = rolesApi;
