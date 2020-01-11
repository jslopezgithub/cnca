const db = require('../../api/connection');

function deleteById(id, res) {
  db
    .delete()
    .from('users')
    .where({ id })

    .then(() => {
      res.send({ message: 'OK', description: 'DELETED' });
    })

    .catch(() => {
      res.send({ message: 'ERR' });
    });
}

function getById(id, res) {
  db
    .select()
    .from('users')
    .where({ id })

    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.send({ message: 'ERR' });
    });
}

function getByEmail(email, res) {
  db
    .select()
    .from('users')
    .where({ email })

    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.send({ message: 'ERR', description: err });
    });
}

function getUserByCodiceFisicale(name, surname, res) {
  db
    .select(['codice_fisicale'])
    .from('users')
    .where({ nome: name })
    .andWhere({ cognome: surname })

    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.send({ message: 'ERROR' });
    });
}

function getUserActivitiesWeek(id, res) {

}

function getUserActivitiesMonth(id, res) {

}

module.exports = (req, res, next) => {
  const codiceFisicale = 'codice_fisicale';

  switch (req.method) {
    // eslint-disable-next-line no-lone-blocks
    case 'GET': { 
      if (req.query.find === codiceFisicale) {
        name = req.query.name;
        // eslint-disable-next-line no-undef
        surname = req.query.surname;

        getUserByCodiceFisicale(name, surname, res);
      }

      else if(req.query.find === 'id') {

      }



    } break;

    case 'POST': {

    } break;

    case 'DELETE': {
      console.log('deleting user');

      if (req.body.id) {
        deleteById(req.body.id, res);
        return;
      }

      req.send({ message: 'ERROR', description: 'ID is required' });
    } break;

    default: res.send('yes');
  }
};
