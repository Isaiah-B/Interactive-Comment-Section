import styled from 'styled-components';
import { Box, Button, TextArea } from '../../index.styles';

export const CommentBoxContainer = styled.div`
  ${Box};
  width: 100%;
  display: flex;
  gap: 2.2rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;
  
`

export const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContentTopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  img {
    height: 3.2rem;
  }
`

export const Username = styled.span`
  font-weight: 500;
  color: hsl(212, 24%, 26%);
`

export const TimePosted = styled.span`
  color: hsl(211, 10%, 45%);
`

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
`

export const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    line-height: 1.5;
    color: hsl(211, 10%, 45%);
  }
`

export const EditTextArea = styled.textarea`
  ${TextArea};
`

export const UpdateBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const UpdateBtn = styled.button`
  ${Button};
`

