import { createSlice, current } from "@reduxjs/toolkit";

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
    updateParent(state, action) {
      const {deletedCommentId, parentId} = action.payload;

      const parentComment = current(state).find(comment => {
       return comment._id === parentId
      });
    
      const parentCopy = Object.assign({}, parentComment);

      parentCopy.replies = parentComment.replies.filter(replyId => replyId !== deletedCommentId);

      return state.map(comment => (
        comment._id === parentId ? parentCopy : comment)
      )
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
    const { newReply, parentComment } = await commentService.createReply(content, parentId);
    dispatch(appendComment(newReply));
    dispatch(updateComment(parentComment));
  }
}

export const editComment = (comment, updatedFields, token) => {
  return async (dispatch) => {
    commentService.setToken(token);
    const updatedComment = await commentService.updateComment(comment._id, updatedFields);
    dispatch(updateComment(updatedComment));
  }
}

export const deleteComment = (comment, token) => {
  return async (dispatch) => {
    commentService.setToken(token);
    dispatch(updateDeleted(comment));

    if (comment.replyingTo)
      dispatch(updateParent({ deletedCommentId: comment._id, parentId: comment.replyingTo }))
      
    await commentService.deleteComment(comment._id);
  }
}




export const { 
  setComments,
  appendComment,
  updateComment,
  updateParent,
  updateDeleted
} = commentSlice.actions;

export default commentSlice.reducer;