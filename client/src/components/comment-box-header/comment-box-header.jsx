import getTimeSincePosted from '../../utils/get-time-since-posted';

import {
  ContentTopInfo,
  Username,
  UserTag,
  TimePosted,
  ButtonsContainer,
  BtnBlue,
  BtnRed,
} from './comment-box-header.styles';

function UserPostActions({ onClickDelete, onClickEdit }) {
  return (
    <>
      <BtnRed onClick={onClickDelete}>
        <img src="images/icon-delete.svg" alt="" aria-hidden />
        <span>Delete</span>
      </BtnRed>
      <BtnBlue onClick={onClickEdit}>
        <img src="images/icon-edit.svg" alt="" aria-hidden />
        <span>Edit</span>
      </BtnBlue>
    </>
  );
}

function CommentBoxHeader({
  name,
  fullName,
  image,
  timePosted,
  isUser,
  handleClickReply,
  handleClickDelete,
  handleClickEdit,
}) {
  const timeSincePosted = getTimeSincePosted(timePosted);

  return (
    <>
      <ContentTopInfo>
        <img src={image} alt={name} />
        <Username title={fullName}>{name}</Username>
        { isUser && <UserTag>you</UserTag> }
        <TimePosted>{timeSincePosted}</TimePosted>
      </ContentTopInfo>
      <ButtonsContainer>
        {
          isUser
            ? <UserPostActions onClickDelete={handleClickDelete} onClickEdit={handleClickEdit} />
            : (
              <BtnBlue onClick={handleClickReply}>
                <img src="images/icon-reply.svg" alt="" aria-hidden />
                <span>Reply</span>
              </BtnBlue>
            )
      }
      </ButtonsContainer>
    </>
  );
}

export default CommentBoxHeader;
