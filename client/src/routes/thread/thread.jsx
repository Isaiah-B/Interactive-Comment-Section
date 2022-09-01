import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CommentWrapper from "../../components/comment-wrapper/comment-wrapper";
import { initializeComments } from "../../reducers/comment-reducer";

import { Container, Main, SectionComments } from "../home/home.styles";

const Thread = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const comment = useSelector(state =>
    state.comments.find(comment => (
      comment._id === id
  )));

  useEffect(() => {
    dispatch(initializeComments());
  }, []);

  if (!comment) {
    return (
      <h1>Comment not found</h1>
    )
  }

  return (
    <>
      <Container>
        <Main>
          <SectionComments>
          {
            <CommentWrapper 
              key={comment._id}
              comment={comment}
              layer={0}
            />
          }
          </SectionComments>
        </Main>
      </Container>
    </>
  )
}

export default Thread;