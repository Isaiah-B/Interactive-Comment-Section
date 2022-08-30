import { useState } from "react";

import {
  UserReplyBoxContainer,
  UserReplyImg,
  UserReplyTextArea,
  UserReplyButton
} from './user-reply-box.styles';

const UserReplyBox = ({ image, repliedUser, handleCreateReply }) => {
  const [replyInput, setReplyInput] = useState(`@${repliedUser.split(' ').join('')} `);

  const handleSubmitReply = () => {
    handleCreateReply(replyInput);
    setReplyInput('');
  }

  return (
    <UserReplyBoxContainer>
    <UserReplyImg src={image} alt="" />
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