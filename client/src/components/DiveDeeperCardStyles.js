import styled from 'styled-components';

export const DiveDeeperCardWrap = styled.div`
  width: 100%;
  border: 1px solid #E2E7EB;
  border-radius: 8px;
  padding: 12px 12px 30px 12px;

  font: Inter;
  color:rgba(15, 24, 37, 0.9);

  :hover {
    cursor: pointer;
    border: 1px solid rgba(73, 40, 237, 0.9);;
  }

  img {
    border-radius: 6px;
    max-width: 754px;
    width: 100%;
    margin-bottom: 24px;
  }

  .title {
    font-weight: 600;
    font-size: 15.75px;
    line-height: 16.38px;
    letter-spacing: 0.3px;
  }

  p {
    font-weight: 500;
    font-size: 12.44px;
    line-height: 20px;
    margin-bottom: 24px;
  }

  .read-article-container {
    display: flex;

  }

  .read-article-container > span {
    font-weight: 600;
    font-size: 14px;
    line-height: 16.24px;
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