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
  return res.data.repliedCommentTopLevel;
}

const updateComment = async (commentId, updatedFields) => {
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.patch(`${baseUrl}/${commentId}`, updatedFields, config);
  return res.data.updatedCommentTopLevel;
}

const deleteComment = async (commentId) => {
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.delete(`${baseUrl}/${commentId}`, config);
  if (res.data.deletedCommentTopLevel) 
    return res.data.deletedCommentTopLevel;
}

export default {
  setToken,
  getAllComments,
  getOneComment,
  createComment,
  createReply,
  updateComment,
  deleteComment
}