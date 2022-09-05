import { createSelector } from '@reduxjs/toolkit';

const selectComments = createSelector(
  (state) => state.comments,
  (comments) => comments.filter((comment) => comment.replyingTo === null),
);

export default selectComments;
