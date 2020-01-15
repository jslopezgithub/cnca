const validate = require('validate');
const db = require('../connection');
require('body-parser');

function getActivityById(id) {
  return;
  db.select('*')
    .where({ id: activity_id })
    .from('activities');
}

function getUserActivities(req, res) {
  const volunteerId = req.query.volunteer;
  const startDate = req.query.start_date;
  const endDate = req.query.end_date;
  const skip = req.query.page || 0;
  const count = req.query.limit || 7; // weekly limit

  if (!volunteerId || !startDate || !endDate) {
    return res.send({ message: 'ERR' });
  }

  return db('activities')
    .join('activity_types', {
      'activities.activity_type_id': 'activity_types.id'
    })

    .where({ 'activities.volunteer_id': volunteerId })
    .andWhereBetween('activity_date', [startDate, endDate])
    .limit(count)
    .offset(skip * count)
    .then((data, err) => {
      res.send({ message: 'ok', data });
    });
}

function deleteActivity(res, id) {
  return db('activities')
    .where({ id })
    .del()
    .then({});
}

function createActivity(req, res) {
  const userId = req.body.volunteer_id;
  const date = req.body.start_date;
  const startTime = req.body.start_time;
  const endTime = req.body.end_time;
  const activityType = req.body.activity_type_id;

  if (!userId || !date || !startTime || !endTime || !activityType) {
    return res.send({ message: 'FORMAT_ERR' });
  }

  return db('activities')
    .insert({
      volunteer_id: user_id,
      activity_date: date,
      start_time: startTime,
      end_time: endTime,
      activity_type_id: activityType
    })

    .then((data, err) => {
      if (err) {
        return res.send({ message: 'ERR', description: err });
      }
      return res.send({ message: 'OK' });
    });
}

module.exports = (req, res) => {
  switch (req.method) {
    case 'GET':
      {
        return getUserActivities(req, res);
      }
      break;

    case 'POST':
      {
        return createActivity(req, res);
      }
      break;

    case 'DELETE':
      {
        const { id } = req.body;

        if (!parseInt(id)) {
          res.send({ message: 'FORMAT_ERR' });
        }

        return deleteActivity(id);
      }
      break;
  }
};
