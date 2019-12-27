const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const activitiesTypesMiddleware = require('./Backend/api/activities/api.activityTypes');

const rolesMiddleware = require('./Backend/api/users/api.roles');
const usersMiddleware = require('./Backend/api/users/api.users');

const PORT = process.env.PORT || 5000;

app.use(express.static('./Frontend/build'));
app.use('/api/activities/types', activitiesTypesMiddleware);
app.use('/api/users/roles', rolesMiddleware);
app.use('/api/users', usersMiddleware);

app.listen(PORT, () => {
  console.log('app started');
});
