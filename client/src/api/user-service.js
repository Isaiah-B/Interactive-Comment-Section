import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/v1/users';

const createUser = async (username) => {
  const res = await axios.post(baseUrl, { username });
  return res.data;
} 

export default { createUser };