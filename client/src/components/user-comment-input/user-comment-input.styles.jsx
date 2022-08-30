import styled from 'styled-components';

import { NewCommentBox, Button, TextArea } from '../../index.styles';

export const NewCommentImg = styled.img`
  height: 3.8rem;
`

export const NewUserCommentBox = styled.div`
  ${NewCommentBox}
`

export const UserCommentTextArea = styled.textarea`
  ${TextArea}
`

export const UserCommentButton = styled.button`
  ${Button}
`