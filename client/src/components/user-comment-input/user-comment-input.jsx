import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { UserContext } from "../../context/user.context";
import { createComment } from "../../reducers/comment-reducer";

import { 
  NewCommentImg, 
  UserCommentTextArea, 
  UserCommentButton,
  NewUserCommentBox
} from "./user-comment-input.styles";

const UserCommentInput = ({ image }) => {
  const [commentInput, setCommentInput] = useState('');
  const { currentUser } = useContext(UserContext);

  const dispatch = useDispatch();

  const handleSubmitComment = () => {
    dispatch(createComment(commentInput, currentUser.token));
    setCommentInput('');
  }

  return (
    <NewUserCommentBox>
      <NewCommentImg src={image} alt="" />
      <UserCommentTextArea 
        className="new-comment-textarea" 
        rows="4" 
        placeholder="Add a comment..."
        value={commentInput}
        onChange={({target}) => setCommentInput(target.value)}>
      </UserCommentTextArea>
      <UserCommentButton className="btn" onClick={handleSubmitComment}>Send</UserCommentButton>
    </NewUserCommentBox>
  )
}

export default UserCommentInput;