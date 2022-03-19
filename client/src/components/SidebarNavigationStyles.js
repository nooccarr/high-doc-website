import styled from 'styled-components';

export const SidebarNavigationWrap = styled.nav`
  box-sizing: border-box;
  margin-right: 16px;
  min-width: 0;
  display: grid;
  grid-gap: 32px;
  display: none;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  left: 0px;
  height: 100vh;
  overflow: auto;
  padding-top: 8px;

  @media (min-width: 800px) {
    display: grid;
  }

  .nav-content {
    padding: 24px 0px 16px 0px;
  }
`;