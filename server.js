/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const http = require('http');
const chalk = require('chalk');
const app = require('./app');

// eslint-disable-next-line radix
const port = parseInt(process.env.PORT || '5000');

// eslint-disable-next-line consistent-return
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.sendStatus(500);
});

const server = http.createServer(app);
if (process.env.NODE.ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(port);

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${chalk.redBright(bind)}`);
});
