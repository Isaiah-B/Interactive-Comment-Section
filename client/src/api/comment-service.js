import axios from 'axios';

let baseUrl;
let token = null;

if (process.env.NODE_ENV === 'development')
  baseUrl = 'http://localhost:8000/api/v1/comments';
else if (process.env.NODE_ENV === 'production')
  baseUrl = 'https://comments-section-interactive.herokuapp.com/api/v1/comments';

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAllComments = async () => {
  const res = await axios.get(baseUrl);
  return res.data.comments;
};

const getOneComment = async (commentId) => {
  const res = await axios.get(`${baseUrl}/${commentId}`);
  return res.data.comment;
};

const createComment = async (content) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.post(baseUrl, { content }, config);
  return res.data.newComment;
};

const createReply = async (content, parentId) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.post(`${baseUrl}/${parentId}`, { content }, config);
  const { newReply, parentComment } = res.data;
  return { newReply, parentComment };
};

const updateComment = async (commentId, updatedFields) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.patch(`${baseUrl}/${commentId}`, updatedFields, config);
  return res.data.updatedComment;
};

const deleteComment = async (commentId) => {
  const config = {
    headers: { Authorization: token },
  };

  await axios.delete(`${baseUrl}/${commentId}`, config);
};

const deleteReply = async (commentId) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.delete(`${baseUrl}/${commentId}`, config);
  console.log(res.data);
  const { deletedComment, parentComment } = res.data;

  return { deletedComment, parentComment };
};

export default {
  setToken,
  getAllComments,
  getOneComment,
  createComment,
  createReply,
  updateComment,
  deleteComment,
  deleteReply,
};
