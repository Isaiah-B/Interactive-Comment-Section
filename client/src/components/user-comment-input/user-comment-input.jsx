import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import { UserContext } from '../../context/user.context';
import { createComment } from '../../reducers/comment-reducer';

import {
  NewCommentImg,
  UserCommentTextArea,
  UserCommentButton,
  NewUserCommentBox,
} from './user-comment-input.styles';

function UserCommentInput() {
  const [commentInput, setCommentInput] = useState('');
  const { currentUser } = useContext(UserContext);

  const dispatch = useDispatch();

  const handleSubmitComment = () => {
    if (commentInput.length > 0) {
      dispatch(createComment(commentInput, currentUser.token));
      setCommentInput('');
    }
  };

  return (
    <NewUserCommentBox>
      <NewCommentImg src={currentUser.image} alt={`${currentUser.name}`} />
      <UserCommentTextArea
        rows="4"
        placeholder="Add a comment..."
        value={commentInput}
        onChange={({ target }) => setCommentInput(target.value)}
      />
      <UserCommentButton onClick={handleSubmitComment}>Send</UserCommentButton>
    </NewUserCommentBox>
  );
}

export default UserCommentInput;
