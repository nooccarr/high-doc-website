import styled from 'styled-components';

export const WelcomeWrap = styled.section`


  h2 {
    margin: 0;
    padding: 24px 0px;
    font: 600 17.72px/20.38px Inter;
    letter-spacing: 0.2px;
    color: rgba(15, 24, 37, 0.9);
  }

  .cards-container {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;