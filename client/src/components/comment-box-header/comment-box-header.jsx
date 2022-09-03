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
  image,
  timePosted,
  isUser,
  handleClickReply,
  handleClickDelete,
  handleClickEdit,
}) {
  const getTimeSincePosted = () => {
    const createdAtTimestamp = new Date(timePosted).getTime();
    const timeDiff = Date.now() - createdAtTimestamp;

    let timeSinceCreated;
    let converted;

    switch (true) {
      case (timeDiff < 3600000):
        timeSinceCreated = Math.floor((timeDiff / 1000) / 60);
        converted = `${timeSinceCreated} minutes ago`;
        break;
      case (timeDiff >= 3600000 && timeDiff < 86400000):
        timeSinceCreated = Math.floor(((timeDiff / 1000) / 3600));
        converted = `${timeSinceCreated} hours ago`;
        break;
      case (timeDiff >= 86400000 && timeDiff < 604800000):
        timeSinceCreated = Math.floor(((timeDiff / 1000) / 86400));
        converted = `${timeSinceCreated} days ago`;
        break;
      case (timeDiff >= 604800000 && timeDiff < 2714400000):
        timeSinceCreated = Math.floor(((timeDiff / 1000) / 604800));
        converted = `${timeSinceCreated} weeks ago`;
        break;
      case (timeDiff >= 2714400000 && timeDiff < 31540000000):
        timeSinceCreated = Math.floor(((timeDiff / 1000) / 2630880));
        converted = `${timeSinceCreated} months ago`;
        break;
      default:
        console.log('There was a problem converting the time');
    }

    return converted;
  };

  const timeSincePosted = getTimeSincePosted();

  return (
    <>
      <ContentTopInfo>
        <img src={image} alt={name} />
        <Username>{name}</Username>
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
