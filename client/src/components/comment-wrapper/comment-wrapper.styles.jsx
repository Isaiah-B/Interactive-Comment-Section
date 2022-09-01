import styled from "styled-components";

export const CommentWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
`

export const Replies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: 94%;
  padding-left: 4.4rem;
  border-left: 2px solid hsl(223, 19%, 93%);

  @media (max-width: 33em) {
    width: 100%;
    padding-left: 1.6rem;
  }
`