import styled from 'styled-components';

export const TopBarWrap = styled.div`
  padding: 16px 24px 16px 32px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: 1px solid #D4D9DF;
  outline-offset: -1px;

  .top-bar-left {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-bar-left > span {
    font: 700 21px/24px Proxima Nova;
  }

  .docs {
    color: rgba(15, 24, 37, 0.42);
  }

  .hightouch {
    color: #271F4D;
  }

  .vertical-line {
    width: 20.25px;
    height: 1px;
    transform: rotate(-90deg);
    background: #D4D9DF;
  }

  .top-bar-right {
    display: flex;
  }

  .top-bar-buttons-spacer {
    width: 14px;
  }
`;