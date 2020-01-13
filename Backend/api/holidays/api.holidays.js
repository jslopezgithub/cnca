// here we can use some REDIS in-memory database to store data
// for grow up high-load functionality

require('body-parser');
const moment = require('moment');
const service = require('./holiday.service');


function getAll(res) {
  return service.getAll()
    .then((data, err) => {
      if (err) {
        res.json({ message: 'ERR', content: err });
      }

      res.json(data);
    });
}

function getById(id, res) {
  service.getById(id).then((data, err) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
}

function isHoliday(day, res) {
  const dayRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

  if (!dayRegex.test(day)) {
    return res.send({ message: 'ERR_DATE_FORMAT' });
  }

  return service

    .isHoliday(day, (err, data) => {
      console.log(data);

      const is_continious = data[0].is_continious.data[0];
      // console.log(is_continious);

      if (data.length === 0) {
        return res.send({ message: false });
      }

      if (moment(day).year() === moment(data.holiday).year()) {
        return res.send({ message: true });
      }

      if (is_continious === 1) {
        return res.send({ message: true });
      }

      return res.send({ message: false });
    });
}

function add(req, res) {
  return service
    .createHoliday(req.body.holiday, parseInt(req.body.continuous), req.body.name)
    .then((data, err) => res.json({ message: 'OK' }));
}

function deleteHoliday(id, res) {
  return service.deleteHoliday(id).then((err) => {
    if (err) {
      return res.json({ message: 'ERR', description: err });
    }

    return res.json({ message: 'OK' });
  });
}

const holidayApi = (req, res, next) => {
  switch (req.method) {
    case 'GET': {
      if (req.query.find) { return isHoliday(req.query.find, res); }
      if (!req.query.id) { return getAll(res); }

      return getById(req.query.id, res);
    } break;

    case 'POST': {
      return add(req, res);
    } break;

    case 'DELETE': {
      return deleteHoliday(req.body.id, res);
    } break;

    default: getAll(res);
  }
};

module.exports = holidayApi;
