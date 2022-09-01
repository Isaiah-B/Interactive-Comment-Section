import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";

import {
  UserReplyBoxContainer,
  UserReplyImg,
  UserReplyTextArea,
  UserReplyButton
} from './user-reply-box.styles';

const UserReplyBox = ({ repliedUser, handleCreateReply }) => {
  const [replyInput, setReplyInput] = useState(`@${repliedUser.split(' ').join('')} `);
  const { currentUser } = useContext(UserContext);

  const handleSubmitReply = () => {
    handleCreateReply(replyInput);
    setReplyInput('');
  }

  return (
    <UserReplyBoxContainer>
      <UserReplyImg src={currentUser.image} alt={currentUser.name} />
      <UserReplyTextArea
        rows="4"
        value={replyInput}
        onChange={({target}) => setReplyInput(target.value)}>
      </UserReplyTextArea>
      <UserReplyButton onClick={() => handleSubmitReply(replyInput)}>Send</UserReplyButton>
  </UserReplyBoxContainer>
  )
}

export default UserReplyBox;