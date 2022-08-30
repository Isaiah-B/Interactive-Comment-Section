import styled from 'styled-components';

import { ReactComponent as IconPlusSvg } from '../../assets/icon-plus.svg';
import { ReactComponent as IconMinusSvg } from '../../assets/icon-minus.svg';

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  padding: 0.6rem 1rem;
  border-radius: 9px;
  background-color: hsl(228, 33%, 97%);
`

export const IconPlus = styled(IconPlusSvg)`
  fill: #C5C6EF;
`

export const IconMinus = styled(IconMinusSvg)`
  fill: #C5C6EF;
`

export const BtnScore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  cursor: pointer;

  &:hover ${IconPlus} {
    fill: hsl(238, 40%, 52%);
  }
  
  &:hover ${IconMinus} {
    fill: hsl(238, 40%, 52%);
  }
`

export const Score = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: hsl(238, 40%, 52%);
`