import styled from 'styled-components';
import { Box, Button, TextArea } from '../../index.styles';
import { ButtonsContainer, ContentTopInfo } from '../comment-box-header/comment-box-header.styles';
import { ScoreContainer } from '../comment-score/comment-score.styles';

export const CommentBoxContainer = styled.div`
  ${Box};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 0.8fr 2fr;
  row-gap: 1.4rem;
  column-gap: 2.2rem;
  overflow-wrap: break-word;
  /* gap: 2.2rem; */

  ${ContentTopInfo} {
    grid-row: 1;
    grid-column: 2;
  }

  ${ButtonsContainer} {
    grid-row: 1;
    grid-column: 3;
    align-self: center;
  }

  ${ScoreContainer} {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  @media (max-width: 42em) {
    ${ButtonsContainer} {
      flex-direction: column;
      gap: 1rem;
    }

    ${ContentTopInfo} {
      gap: 1.2rem;
    }
  }


  @media (max-width: 33em) {
    grid-template-columns: 1fr 1fr;

    ${ContentTopInfo} {
      grid-column: 1 / -1;
      grid-row: 1;
    }

    ${ButtonsContainer} {
      grid-row: 3;
      grid-column: 2;
      flex-direction: row;
      justify-self: end;
      gap: 3rem;
    }

    ${ScoreContainer} {
      grid-row: 3;
      grid-column: 1 / 2;
      flex-direction: row;
      height: 4rem;
      width: 10rem;
      align-self: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;
  
  @media (max-width: 33em) {
    grid-row: 2 / 3;
  } 
`;

export const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Username = styled.span`
  font-weight: 500;
  color: hsl(212, 24%, 26%);
`;

export const TimePosted = styled.span`
  color: hsl(211, 10%, 45%);
`;

export const BtnReply = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: inherit;
  border: none;
  background: none;
  color: hsl(238, 40%, 52%);
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-column: 2 / -1;
  grid-row: 2 / 3;
  p {
    line-height: 1.5;
    color: hsl(211, 10%, 45%);
  }

  @media (max-width: 33em) {
    grid-row: 2;
    grid-column: 1 / -1;
  }
`;

export const EditTextArea = styled.textarea`
  ${TextArea};
`;

export const UpdateBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const UpdateBtn = styled.button`
  ${Button};
`;
