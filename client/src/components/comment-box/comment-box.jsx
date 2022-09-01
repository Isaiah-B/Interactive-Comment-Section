import { useState, useContext } from "react";
import { useDispatch } from "react-redux";

import { UserContext } from "../../context/user.context";
import { createReply, deleteComment, deleteReply, editComment } from "../../reducers/comment-reducer";

import CommentBoxHeader from "../comment-box-header/comment-box-header";
import CommentScore from "../comment-score/comment-score";
import ConfirmDeleteModal from "../confirm-delete-modal/confirm-delete-modal";
import UserReplyBox from '../user-reply-box/user-reply-box';

import {
  CommentBoxContainer,
  ContentBottom,
  EditTextArea,
  UpdateBtnWrapper,
  UpdateBtn
} from './comment-box.styles.jsx';

const CommentBox = ({ comment  }) => {
  const dispatch = useDispatch();

  const [replyOpen, setReplyOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  
  const { currentUser } = useContext(UserContext);
  
  const date = new Date(comment.createdAt);
  const formattedDate = date.toLocaleString().split(', ').join(' ');

  const userMentionPattern = /@\w+/g;

  const handleCreateReply = (content) => {
    setReplyOpen(false);
    dispatch(createReply(content, comment._id, currentUser.token));
  }

  const handleDeleteChoice = (choice) => {
    if (choice) {
      if (comment.replyingTo)
        dispatch(deleteReply(comment, currentUser.token));
      else
        dispatch(deleteComment(comment, currentUser.token));
    }
    else
      setDeleteModalOpen(false);    
      return;
  }

  const handleUpdateComment = () => {
    dispatch(editComment(comment, { content: editInput }, currentUser.token));
    setIsEditing(!isEditing);
  }

  const highlightMention = (text) => {
    if (userMentionPattern.test(text)) {
      return text.replaceAll(userMentionPattern, 
        (match) => {
          return `<strong style="color: hsl(238, 40%, 52%)">${match}</strong>`
        }
      );
    }
    return text
  }

  const incrementScore = () => {
    if (comment.user._id !== currentUser.id)
      dispatch(editComment(comment, { score: comment.score + 1 }, currentUser.token));
  }

  const decrementScore = () => {
    if (comment.user._id !== currentUser.id)
      dispatch(editComment(comment, { score: comment.score - 1 }, currentUser.token));
  }



  return (
    <>
    { deleteModalOpen && <ConfirmDeleteModal returnResult={handleDeleteChoice} />}
    
    <CommentBoxContainer>
      <CommentScore 
        score={comment.score} 
        handleClickPlus={incrementScore} 
        handleClickMinus={decrementScore}
      />
      <CommentBoxHeader 
        name={comment.user.username} 
        image={comment.user.image.png} 
        timePosted={formattedDate}
        isUser={currentUser ? currentUser.id === comment.user._id : false}
        handleClickReply={() => setReplyOpen(!replyOpen)}
        handleClickDelete={() => setDeleteModalOpen(true)}
        handleClickEdit={() => setIsEditing(!isEditing)}
      />
      <ContentBottom>
        { !isEditing && <p dangerouslySetInnerHTML={{__html: highlightMention(comment.content)}}></p>}

        { isEditing && 
        <>
          <EditTextArea 
            defaultValue={comment.content}
            onChange={({target}) => setEditInput(target.value)}
            ></EditTextArea>

          <UpdateBtnWrapper>
            <UpdateBtn onClick={handleUpdateComment}>Update</UpdateBtn>
          </UpdateBtnWrapper> 
        </>
        }
      </ContentBottom>
    </CommentBoxContainer>


      { replyOpen && 
        <UserReplyBox
          repliedUser={comment.user.username}
          handleCreateReply={handleCreateReply}
        /> 
      } 
    </>
  )
}

export default CommentBox;