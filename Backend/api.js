const { Router } = require('express');

// const { getClient } = require('./db').default;

const api = new Router();

api.get('/', (_, res, next) => {
  // eslint-disable-next-line no-undef
  const client = getClient();

  client.connect(err => {
    if (err) {
      return next(err);
    }
    res.json({ message: 'Hello, Heroku!' });
    client.close();
  });
});

module.exports = api;
