import styled from 'styled-components';

export const NavContentWrap = styled.div`
  box-sizing: border-box;
  margin: 0px 24px 0px 32px;
  min-width: 0;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr;
  height: 100%;
  max-width: 1440px;

  @media (min-width: 800px) {
    grid-template-columns: 252px 1fr;
  }
`;