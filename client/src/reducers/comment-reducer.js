import { createSlice } from "@reduxjs/toolkit";

import commentService from "../api/comment-service";

const commentSlice = createSlice({
  name: 'comment',
  initialState: [],
  reducers: {
    setComments(state, action) {
      return action.payload;
    },
    appendComment(state, action) {
      state.push(action.payload);
    },
    updateComment(state, action) {
      const updatedComment = action.payload;

      return state.map(comment => (
        comment._id === updatedComment._id ? updatedComment : comment
      ));
    },
    updateDeleted(state, action) {
      const deletedComment = action.payload;

      return state.filter(comment => (
        comment._id !== deletedComment._id
      ));
    }
  }
});

export const initializeComments = () => {
  return async (dispatch) => {
    const comments = await commentService.getAllComments();
    dispatch(setComments(comments));
  }
}

export const getComment = (commentId) => {
  return async (dispatch) => {
    const comment = await commentService.getOneComment(commentId);
    console.log(comment)
    dispatch(setComments(comment));
  }
}

export const createComment = (content, token) => {
  return async (dispatch) => {
    commentService.setToken(token);
    const createdComment = await commentService.createComment(content);
    dispatch(appendComment(createdComment));
  }
}

export const createReply = (content, parentId, token) => {
  return async (dispatch) => {
    commentService.setToken(token);
    const repliedCommentTopLevel = await commentService.createReply(content, parentId);
    dispatch(updateComment(repliedCommentTopLevel));
  }
}

export const deleteComment = (comment, token) => {
  return async (dispatch) => {
    commentService.setToken(token);
    const response = await commentService.deleteComment(comment._id);

    // If response is received, it is the parent of the deleted reply
    if (response)
      dispatch(updateComment(response));
    else
      dispatch(updateDeleted(comment));
  }
}

export const editComment = (comment, updatedFields, token) => {
  return async (dispatch) => {
    commentService.setToken(token);
    const updatedComment = await commentService.updateComment(comment._id, updatedFields);
    dispatch(updateComment(updatedComment));
  }
}

export const { 
  setComments,
  appendComment,
  updateComment,
  updateDeleted
} = commentSlice.actions;

export default commentSlice.reducer;