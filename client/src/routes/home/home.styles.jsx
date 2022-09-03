import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 4rem 0;
  width: 73rem;
  height: 100%;

  @media (max-width: 49em) {
    width: 95%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
`;

export const SectionComments = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
