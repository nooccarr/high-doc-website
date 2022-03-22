import styled from 'styled-components';

export const NavigationItemWrap = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }

  ul > div {
    display: flex;
    align-items: center;
    padding: 12px 16px;
  }

  svg {
    margin-right: 10px;
  }

  h2 {
    font: 500 14px/16.24px Inter;
    letter-spacing: 0.2px;
    color: rgba(15, 24, 37, 0.9);
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: rgba(15, 24, 37, 0.42);
    display: block;
    font: 14px Inter;
    padding: 12px 22px;
  }

  a:hover {
    cursor: pointer;

    background-color: rgba(39, 31, 77, 0.04);
    border-radius: 6px;
  }

  a:active {
    background-color: #DCDFE2;
  }

  a:focus {
    color: rgba(73, 40, 237, 0.9);
  }
`;