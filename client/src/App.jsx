import React, { useEffect, useState, useContext, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Axios from 'axios';

import Spinner from './Spinner';
import TopBar from './components/TopBar';
import SignUpButton from './components/SignUpButton';
import LoginButton from './components/LoginButton';
import SidebarNavigation from './components/SidebarNavigation';

import MainContentRoutes from './MainContentRoutes';

import { ViewContext } from './contexts/ViewContext';

import { renderSvg } from './files/svgs';

import { AppWrap } from './AppStyles';
import { NavContentWrap } from './components/NavContentStyles';

const App = () => {
  const [navItemList, setNavItemList] = useState([]);
  const [navItems, setNavItems] = useState({});
  const [mainContentHeadings, setMainContentHeadings] = useState({});
  const [diveDeeperCards, setDiveDeeperCards] = useState([]);
  const [error, setError] = useState(false);
  const [view, setView] = useState(null);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [currentPath, setCurrentPath] = useState(null);

  useEffect(() => {
    getSidebarNavMainContentData();
    window.addEventListener('resize', () => {
      const { innerWidth } = window;
      updateWidth(innerWidth);
      innerWidth >= 800 && setShowMobileNav(false);
    });
  }, []);

  const getSidebarNavMainContentData = () => {
    Axios.get('/contentItems')
      .then(({ data }) => {
        const { navItemList, navItems, mainContentHeadings, diveDeeperCards } = data;
        const { location, innerWidth } = window;
        const { pathname } = location;
        setNavItemList(navItemList);
        setNavItems(navItems);
        setMainContentHeadings(mainContentHeadings);
        setDiveDeeperCards(diveDeeperCards);
        updatePath(pathname);
        updateWidth(innerWidth);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const updatePath = (path) => {
    setCurrentPath(path);
  }

  const updateWidth = (width) => {
    width < 800 ? setView('mobile') : setView('desktop');
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const renderTopBarRightContent = () => {
    if (view === 'desktop') {
      return (
        <Fragment>
          <SignUpButton />
          <div className='top-bar-buttons-spacer'></div>
          <LoginButton />
        </Fragment>
      );
    } else if (showMobileNav === false) {
      const { HamburgerButton } = renderSvg;
      return (
        <div className='hamburger-button' onClick={toggleMobileNav}>
          {HamburgerButton}
        </div>);
    } else {
      const { XButton } = renderSvg;
      return (
        <div className='x-button' onClick={toggleMobileNav}>
          {XButton}
        </div>
      );
    }
  };

  const sidebarNavigationComponent = () => (
    <SidebarNavigation
      navItemList={navItemList}
      navItems={navItems}
      showMobileNav={showMobileNav}
      updatePath={updatePath}
      toggleMobileNav={toggleMobileNav}
    />
  );

  const mainContentComponent = () => (
    <MainContentRoutes
      mainContentHeadings={mainContentHeadings}
      diveDeeperCards={diveDeeperCards}
    />
  );

  const renderSideNavMainContent = () => {
    if (view === 'desktop') {
      return (
        <Fragment>
          {sidebarNavigationComponent()}
          {mainContentComponent()}
        </Fragment>
      );
    } else if (showMobileNav === false) {
      return (mainContentComponent());
    } else {
      return (sidebarNavigationComponent());
    }
  };

  if (error) {
    return (<h2>An error has occurred, try again later.</h2>);
  } else if (!view) {
    return (<Spinner />);
  } else {
    return (
      <ViewContext.Provider value={view}>
        <Router>
          <AppWrap>
            <TopBar renderTopBarRightContent={renderTopBarRightContent} />
            <NavContentWrap>
              {renderSideNavMainContent()}
            </NavContentWrap>
          </AppWrap>
        </Router>
      </ViewContext.Provider>
    );
  }
};

export default App;