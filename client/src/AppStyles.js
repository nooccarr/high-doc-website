import styled from 'styled-components';

export const AppWrap = styled.div`
  background-color: #FFFFFF;
  max-height: 1325px;

  .hamburger-button, .x-button {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(15, 24, 37, 0.9);
  }

  .hamburger-button:hover, .x-button:hover {
    cursor: pointer;
  }

  .sidebar-signup-login-container {
    display: flex;
  }
  .sidebar-signup-login-container > button {
    flex-grow: 1;
    margin: 24px;
  }
`;