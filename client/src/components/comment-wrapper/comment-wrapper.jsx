import { Link } from "react-router-dom";
import CommentBox from "../comment-box/comment-box"

import { CommentWrapperContainer, Replies}  from './comment-wrapper.styles';

// Show the first two levels of replies on the main page
// Further levels will be displayed on another page
const CommentWrapper = ({ comment, layer }) => {
  return (
    <CommentWrapperContainer>
      <CommentBox comment={comment} />
      {
        comment.replies.length > 0 &&
        layer < 2 &&
          <Replies>
            {
              comment.replies.map(reply => (
                <div key={reply._id}>
                  <CommentWrapper 
                    comment={reply}
                    layer={layer + 1}
                  />
                </div>
              ))
            }
          </Replies>
      }
      
      {
        layer >= 2 &&
        comment.replies.length > 0 &&
        <Link to={`/${comment._id}`}>Continue thread...</Link>
      }
    </CommentWrapperContainer>
  )
}

export default CommentWrapper;