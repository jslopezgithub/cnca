/* eslint-disable no-undef */
import axios from 'axios';
// eslint-disable-next-line import/prefer-default-export
function Register(data) {
  // return data;
  return axios(`${API}`, {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(`your ${res} has been posted succesfuly`))
    .catch(err => console.log(`oops ${err}`));
}

export default Register;
