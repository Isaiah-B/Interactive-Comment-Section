import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CommentWrapper from "../../components/comment-wrapper/comment-wrapper";
import commentService from "../../api/comment-service";

import { Container, Main, SectionComments } from "../home/home.styles";

const Thread = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    const getComment = async () => {
      setComment(await commentService.getOneComment(id));
    }

    getComment();
  }, [id])

  if (!comment) return null

  return (
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
  )
}

export default Thread;