const db = require('../../api/connection');

function deleteById(id, res) {

    db
    .delete()
    .from('users')
    .where({ id: id })
    
    .then(function(data) {
        res.send({ message: "OK", description: "DELETED" });
    })

    .catch(function(err) {
        res.send({ message: "ERR" });
    });

}

function getById(id, res) {

    db
    .select()
    .from('users')
    .where({ id: id })
    
    .then(function(data) {
        res.send(data);
    })

    .catch(function(err) {
        res.send({ message: "ERR" });
    });

}

function getByEmail(email, res) {
    db
    .select()
    .from('users')
    .where({ email: email })
    
    .then(function(data) {
        res.send(data);
    })

    .catch(function(err) {
        res.send({ message: "ERR" });
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

    } break;

    case 'POST': {

    } break;

    case 'DELETE': {

        console.log('deleting user');

        if(req.body.id) {
            deleteById(req.body.id, res);
                return;
        }

        req.send({ message: "ERROR", description: "ID is required" });


    } break;

      default: res.send('yes');
    } 
};
