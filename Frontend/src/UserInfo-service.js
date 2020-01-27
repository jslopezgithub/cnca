// /* eslint-disable no-undef */
// import axios from 'axios';
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

// // function DailyUserData(data) {
// // console.log(data);
// // return axios(`${API}`, {
// //   method: 'GET',
// //   mode: 'CORS',
// //   body: JSON.stringify(data),
// //   headers: {
// //     'Content-Type': 'application/json'
// //   }
// // })
// //   .then(res => console.log(`${res}`))
// //   .catch(err => console.log(`oops ${err}`));
// // }

function UserActivity() {
  // fetch('http://localhost:5000/api/activities/types')
  //   .then(res => console.log(res))
  //   .catch(err => console.log(`oops ${err}`));
  // // }
  const lists = [
    { id: '1', name: 'attività1', is_daily: '0' },
    { id: '2', name: 'attività2', is_daily: '0' },
    { id: '3', name: 'attività3', is_daily: '0' },
    { id: '4', name: 'ferie', is_daily: '0' },
    { id: '5', name: 'malattia', is_daily: '1' },
    {
      id: '6',
      name: 'Recupero ore lavoro in festivo',
      is_daily: '0'
    },
    { id: '7', name: 'Formazione Generale', is_daily: '0' },
    { id: '8', name: 'Formazione Specifica', is_daily: '0' },
    { id: '9', name: 'Formazione FAD', is_daily: '0' },
    {
      id: '10',
      name: 'PERMESSO str: donazione sangue',
      is_daily: '0'
    },
    {
      id: '11',
      name: 'PERMESSO str: diritto di voto',
      is_daily: '0'
    },
    {
      id: '12',
      name: 'PERMESSO str: testimone g',
      is_daily: '0'
    },
    {
      id: '13',
      name: 'PERMESSO str: seggio elettorale',
      is_daily: '0'
    }
  ];
  return lists;
}
// eslint-disable-next-line import/prefer-default-export
export { UserActivity };
