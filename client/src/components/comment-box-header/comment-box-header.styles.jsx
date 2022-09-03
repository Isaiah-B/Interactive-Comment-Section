import styled from 'styled-components';

export const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentTopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  img {
    height: 3.2rem;
    width: 3.2rem;
  }
`;

export const Username = styled.span`
  font-weight: 500;
  color: hsl(212, 24%, 26%);
`;

export const UserTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 0.1rem 0.7rem 0.3rem;
  margin-left: -0.8rem;
  font-size: 1.4rem;
  color: hsl(0, 0%, 100%);
  background-color: hsl(238, 40%, 52%);
`;

export const TimePosted = styled.span`
  color: hsl(211, 10%, 45%);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2.6rem;
`;

const CommentActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }  
`;
export const BtnBlue = styled(CommentActionButton)`
  color: hsl(238, 40%, 52%);
`;

export const BtnRed = styled(CommentActionButton)`
  color: hsl(358, 79%, 66%);
`;
