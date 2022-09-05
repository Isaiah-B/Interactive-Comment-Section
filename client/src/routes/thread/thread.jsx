import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { initializeComments } from '../../reducers/comment-reducer';
import CommentWrapper from '../../components/comment-wrapper/comment-wrapper';

import { Container, Main } from '../home/home.styles';
import { SectionComments } from '../../components/comments/comments.styles';

function Thread() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const comment = useSelector(
    (state) => state.comments.find(
      (stateComment) => (
        stateComment._id === id
      ),
    ),
  );

  useEffect(() => {
    dispatch(initializeComments());
  }, []);

  if (!comment)
    return (
      <h1>Comment not found</h1>
    );

  return (
    <Container>
      <Main>
        <SectionComments>
          <CommentWrapper
            key={comment._id}
            comment={comment}
            layer={0}
          />
        </SectionComments>
      </Main>
    </Container>
  );
}

export default Thread;
