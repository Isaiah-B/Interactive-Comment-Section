import styled from "styled-components";

import { Box, TextArea, Button, NewCommentBox } from "../../index.styles";
import { NewCommentImg } from "../user-comment-input/user-comment-input.styles";

export const UserReplyBoxContainer = styled.div`
  ${Box};
  ${NewCommentBox};
`

export const UserReplyImg = styled.img`
  ${NewCommentImg};
`

export const UserReplyTextArea = styled.textarea`
  ${TextArea};
`

export const UserReplyButton = styled.button`
  ${Button};
`