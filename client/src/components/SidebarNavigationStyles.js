import styled from 'styled-components';



export const SidebarNavigationWrap = styled.nav`
  .nav-container {
    margin-right: 16px;
    // display: none;
    position: sticky;
    height: 100vh;
    overflow: auto;
    padding-top: 8px;

    @media (min-width: 800px) {
      display: grid;
    }
  }

  .nav-content {
    padding: 24px 0px 16px 0px;
  }
`;

// display: none    // sidebar navigation
// display: grid    // main content
