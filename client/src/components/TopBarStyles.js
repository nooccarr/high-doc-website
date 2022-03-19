import styled from 'styled-components';

export const TopBarWrap = styled.div`
  padding: 16px 24px 16px 32px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: 1px solid #D4D9DF;
  outline-offset: -1px;

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  div > span {
    font: Proxima Nova;
    font-weight: 700;
    font-size: 21px;
    line-height: 24px;
  }

  .hightouch {
    color: #271F4D;
  }

  .docs {
    color: rgba(15, 24, 37, 0.42);
  }

  div > div {
    width: 20.25px;
    height: 1px;
    transform: rotate(-90deg);
    background: #D4D9DF;
  }

  button {
    cursor: pointer;
    font: Inter;
    font-size: 14px;
    line-height: 16.24px;
    letter-spacing: 0.2px;
  }

  .signup {
    font-weight: 500;
    background-color: #FFFFFF;
    border-radius: 6px;
    border: none;
    outline: 1px solid #D4D9DF;
    outline-offset: -1px;
    color: rgba(15, 24, 37, 0.9);
    padding: 11px 12px;
    margin-right: 12px;
  }

  .login {
    font-weight: 600;
    background-color: #271F4D;
    border-radius: 6px;
    border: none;
    outline: 1px solid #000000;
    outline-offset: -1px;
    color: #FFFFFF;
    padding: 11px 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .signup:hover {
    background-color: #271F4D;
    outline: 1px solid #000000;
    outline-offset: -1px;
    color: #FFFFFF;
  }

  .login:hover {
    background-color: #FFFFFF;
    outline: 1px solid #D4D9DF;
    outline-offset: -1px;
    color: rgba(15, 24, 37, 0.9);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;