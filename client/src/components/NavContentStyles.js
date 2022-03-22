import styled from 'styled-components';

export const NavContentWrap = styled.div`
  box-sizing: border-box;
  margin: 0px 24px 0px 32px;
  display: grid;
  max-width: 1440px;

  main {
    padding: 24px;
  }

  @media (min-width: 800px) {
    grid-template-columns: 252px 1fr;

    main {
      padding: 40px 48px 32px 48px;
    }
  }
`;