import styled from "styled-components";

import { ModalBg, Modal, Button } from "../../index.styles";

export const DeleteModalBg = styled.div`
  ${ModalBg}

  &::before {
    background-color: hsla(0,0%,0%,0.3);
  }
`

export const DeleteModalContainer = styled.div`
  ${Modal}
  align-items: flex-start;
  gap: 2rem;
  width: 40rem;
`

export const DeleteModalBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1.4rem;
`

export const DeleteSubmitYes = styled.button`
  ${Button}
  width: 100%;
  background-color: hsl(358, 79%, 66%) !important;
`

export const DeleteSubmitNo = styled.button`
  ${Button}
  width: 100%;
  background-color: hsl(211, 10%, 45%) !important;
`