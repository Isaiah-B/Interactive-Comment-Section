import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/v1/comments';
let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
}

const getAllComments = async () => {
  const res = await axios.get(baseUrl);
  return res.data.comments;
}

const getOneComment = async (commentId) => {
  const res = await axios.get(`${baseUrl}/${commentId}`);
  console.log(res.data.comment)
  return res.data.comment;
}

const createComment = async (content) => {
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.post(baseUrl, { content }, config);
  return res.data.newComment;
}

const createReply = async (content, parentId) => {
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.post(`${baseUrl}/${parentId}`, { content }, config);
  const { newReply, parentComment } = res.data;
  return { newReply, parentComment }
}

const updateComment = async (commentId, updatedFields) => {
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.patch(`${baseUrl}/${commentId}`, updatedFields, config);
  return res.data.updatedComment;
}

const deleteComment = async (commentId) => {
  const config = {
    headers: { Authorization: token }
  }

  await axios.delete(`${baseUrl}/${commentId}`, config);
}

const deleteReply = async (commentId) => {
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.delete(`${baseUrl}/${commentId}`, config);
  console.log(res.data)
  const { deletedComment, parentComment } = res.data;

  return { deletedComment, parentComment };
}

export default {
  setToken,
  getAllComments,
  getOneComment,
  createComment,
  createReply,
  updateComment,
  deleteComment,
  deleteReply
}