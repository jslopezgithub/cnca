/* eslint-disable no-undef */
// import axios from 'axios';
// eslint-disable-next-line import/prefer-default-export
// function Register(data) {
//   console.log(data);
//   return axios(`${API}`, {
//     method: 'POST',
//     mode: 'CORS',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => res.send(`your ${res} has been posted successfully`))
//     .catch(err => console.log(`oops ${err}`));
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

function UserActivity() {
  // return axios('http://localhost:5000/api/activities/types', {
  //   method: 'GET',
  //   mode: 'CORS',
  //   body: JSON.stringify(),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(res => console.log(`${res}`))
  //   .catch(err => console.log(`oops ${err}`));
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
export default UserActivity;
// DailyUserData, Register,
//  lists
//    .filter(milley => milley.name === 'PERMESSO str: seggio elettorale')
//    .map(e => e.id);
