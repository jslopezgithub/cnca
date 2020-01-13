/* eslint-disable no-undef */
// import axios from 'axios';
// eslint-disable-next-line import/prefer-default-export
function Register(data) {
  console.log(data);
  return axios(`${API}`, {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.send(`your ${res} has been posted successfully`))
    .catch(err => console.log(`oops ${err}`));
}

// function UserDataWeekley(data) {
//   // return data;
//   return axios(`${API}`, {
//     method: 'GET',
//     mode: 'CORS',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => console.log(`${res}`))
//     .catch(err => console.log(`oops ${err}`));
// }

export default Register;
