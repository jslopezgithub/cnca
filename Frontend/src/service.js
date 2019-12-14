import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getMessage = async () => {
  const response = await axios.get('/api');
  return response.data.message;
};
