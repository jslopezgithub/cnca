// /* eslint-disable no-undef */
import axios from 'axios';
// // eslint-disable-next-line import/prefer-default-export
// function DaylyUserActivity(data) {
//   console.log(data.start_date);
//   axios('your post url here', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       activity_date: data.start_date,
//       start_time: data.start_time,
//       end_time: data.end_time,
//       activity_type_id: data.activity_type_id
//     })
//   })
//     .then(res => res.json())
//     .then(lastRes => console.log(lastRes))
//     .catch(err => console.log(err));
// }

// function DailyUserData(data) {
// console.log(data);
// return axios(`${API}`, {
//   method: 'GET',
//   mode: 'CORS',
//   body: JSON.stringify(data),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(res => console.log(`${res}`))
//   .catch(err => console.log(`oops ${err}`));
// }

// function UserActivity() {
//   axios
//     .get(
//       'http://localhost:5000/api/activities?volunteer=1&start_date=2019-02-12&end_date=2019-06-12'
//     )
//     .then(res => console.log(res))
//     .catch(err => console.log(`oops ${err}`));
// }
function UserActivity() {
  const lists = [
    {
      id: 10,
      volunteer_id: 1,
      activity_date: '2019-02-11T23:00:00.000Z',
      start_time: '08:00:00',
      end_time: '11:00:00',
      activity_type_id: 10,
      createdAt: '2020-02-04T15:02:10.000Z',
      updatedAt: null,
      nome: 'PERMESSO str: donazione sangue',
      is_daily: { type: 'Buffer', data: [0] }
    },
    {
      id: 4,
      volunteer_id: 1,
      activity_date: '2019-03-11T23:00:00.000Z',
      start_time: '08:00:00',
      end_time: '10:00:00',
      activity_type_id: 4,
      createdAt: '2020-02-04T15:02:10.000Z',
      updatedAt: null,
      nome: 'ferie',
      is_daily: { type: 'Buffer', data: [0] }
    },
    {
      id: 11,
      volunteer_id: 1,
      activity_date: '2019-04-11T22:00:00.000Z',
      start_time: '08:30:00',
      end_time: '12:00:00',
      activity_type_id: 11,
      createdAt: '2020-02-04T15:02:10.000Z',
      updatedAt: null,
      nome: 'PERMESSO str: diritto di voto',
      is_daily: { type: 'Buffer', data: [0] }
    },
    {
      id: 12,
      volunteer_id: 1,
      activity_date: '2019-05-11T22:00:00.000Z',
      start_time: '08:00:00',
      end_time: '09:00:00',
      activity_type_id: 12,
      createdAt: '2020-02-04T15:02:10.000Z',
      updatedAt: null,
      nome: 'PERMESSO str: testimone g',
      is_daily: { type: 'Buffer', data: [0] }
    },
    {
      id: 13,
      volunteer_id: 1,
      activity_date: '2019-06-11T22:00:00.000Z',
      start_time: '09:00:00',
      end_time: '13:00:00',
      activity_type_id: 13,
      createdAt: '2020-02-04T15:02:10.000Z',
      updatedAt: null,
      nome: 'PERMESSO str: seggio elettorale',
      is_daily: { type: 'Buffer', data: [0] }
    }
  ];
  return lists;
}
// eslint-disable-next-line import/prefer-default-export
export default { UserActivity };
