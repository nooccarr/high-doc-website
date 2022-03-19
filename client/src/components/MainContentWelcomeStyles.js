import styled from 'styled-components';

export const MainContentWelcomeWrap = styled.section`
  padding-top: 24px;

  h4 {
    font: Inter;
    font-weight: 600;
    font-size: 17.72px;
    line-height: 20.38px;
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