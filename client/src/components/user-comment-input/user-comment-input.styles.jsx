import styled from 'styled-components';

import { NewCommentBox, Button, TextArea } from '../../index.styles';

export const NewUserCommentBox = styled.div`
  ${NewCommentBox}

  @media (max-width: 33em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;

    padding: 1.6rem;
  }
`;

export const NewCommentImg = styled.img`
  height: 3.8rem;

  @media (max-width: 33em) {
    grid-row: 2;
  }
`;

export const UserCommentTextArea = styled.textarea`
  ${TextArea}

  @media (max-width: 33em) {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`;

export const UserCommentButton = styled.button`
  ${Button}

  @media (max-width: 33em) {
    grid-row: 2;
    width: 10rem;
    justify-self: end;
  }
`;
