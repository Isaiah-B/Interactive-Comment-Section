import styled from 'styled-components';

import { TextArea, Button, NewCommentBox } from '../../index.styles';

export const UserReplyBoxContainer = styled.div`
  ${NewCommentBox}

  @media (max-width: 33em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;

    padding: 1.6rem;
  }
`;

export const UserReplyImg = styled.img`
  height: 3.8rem;

  @media (max-width: 33em) {
    grid-row: 2;
  }
`;

export const UserReplyTextArea = styled.textarea`
  ${TextArea};

  @media (max-width: 33em) {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`;

export const UserReplyButton = styled.button`
  ${Button};

  @media (max-width: 33em) {
    grid-row: 2;
    width: 10rem;
    justify-self: end;
  }
`;
