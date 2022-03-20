import styled from 'styled-components';

export const LoginButtonWrap = styled.button`
  cursor: pointer;
  font: Inter;
  font-size: 14px;
  line-height: 16.24px;
  letter-spacing: 0.2px;
  font-weight: 600;
  background-color: #271F4D;
  border-radius: 6px;
  border: none;
  outline: 1px solid #000000;
  outline-offset: -1px;
  color: #FFFFFF;
  padding: 11px 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :hover {
    background-color: #FFFFFF;
    outline: 1px solid #D4D9DF;
    outline-offset: -1px;
    color: rgba(15, 24, 37, 0.9);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;