const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const activitiesTypesMiddleware = require('./Backend/api/activities/api.activityTypes');
const rolesMiddleware = require('./Backend/api/users/api.roles');
const usersMiddleware = require('./Backend/api/users/api.users');
const holidayMiddleware = require('./Backend/api/holidays/api.holidays');
const activitiesMiddleware = require('./Backend/api/activities/api.activity');

const PORT = process.env.PORT || 5000;


app.use('/api/activities/types', activitiesTypesMiddleware);
app.use('/api/activities', activitiesMiddleware);
app.use('/api/users/roles', rolesMiddleware);
app.use('/api/users', usersMiddleware);
app.use('/api/holidays', holidayMiddleware);
app.use(express.static('./Frontend/build'));

app.listen(PORT, () => {
  console.log('app started');
});
