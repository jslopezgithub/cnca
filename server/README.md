Server
======

This directory contains the Express server application and related configuration.

It's slightly more complicated than the Express servers we've played with so far, but this is to allow easier
development and deployment. It contains the following:

  - `api.js`: defines the user endpoints for the app, using an [Express router]. **Start here** when you're adding new
    endpoints of your own.
  - `app.js`: adds the other configuration to the app, e.g. JSON parsing, logging and serving for the client
    application.
  - `db.js`: exposes a function to get a configured MongoDB client per [the lesson].
  - `server.js`: creates and starts a server to run the app in production.

  [Express router]: https://expressjs.com/en/guide/routing.html#express-router
  [the lesson]: http://cyf-mongodb.com/lesson-2/#connecting-to-a-mongodb-server-from-a-local-node-server
