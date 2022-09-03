import axios from 'axios';

let baseUrl;

if (process.env.NODE_ENV === 'development')
  baseUrl = 'http://localhost:8000/api/v1/users';
else if (process.env.NODE_ENV === 'production')
  baseUrl = 'https://comments-section-interactive.herokuapp.com/api/v1/users';

const createUser = async (username) => {
  const res = await axios.post(baseUrl, { username });
  return res.data;
};

export default { createUser };
