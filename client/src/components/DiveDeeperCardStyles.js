import styled from 'styled-components';

export const DiveDeeperCardWrap = styled.div`
  width: 100%;
  border: 1px solid #E2E7EB;
  border-radius: 8px;
  padding: 12px 12px 30px 12px;

  color:rgba(15, 24, 37, 0.9);

  :hover {
    cursor: pointer;
    border: 1px solid rgba(73, 40, 237, 0.9);;
  }

  img {
    border-radius: 6px;
    max-width: 754px;
    width: 100%;
    height: auto;
    margin-bottom: 24px;
  }

  .title {
    font: 600 15.75px/16.38px Inter;
    letter-spacing: 0.3px;
  }

  p {
    font: 500 12.44px/20px Inter;
    margin-bottom: 24px;
  }

  .read-article-container {
    display: flex;

  }

  .read-article-container > span {
    font: 600 14px/16.24px Inter;
    letter-spacing: 0.2px;
    color: rgba(15, 24, 37, 0.42);
    margin-right: 4px;
  }

  .svg-container {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;