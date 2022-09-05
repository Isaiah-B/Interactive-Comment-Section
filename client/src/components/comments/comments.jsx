import CommentWrapper from '../comment-wrapper/comment-wrapper';
import { SectionComments } from './comments.styles';

function Comments({ comments }) {
  return (
    <SectionComments>
      {
        comments
        && comments.map((comment) => (
          <CommentWrapper
            key={comment._id}
            comment={comment}
            layer={0}
          />
        ))
      }
    </SectionComments>
  );
}

export default Comments;
