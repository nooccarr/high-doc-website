import React, { useEffect, useState, useContext, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Spinner from './Spinner';
import TopBar from './components/TopBar';
import SignUpLoginButton from './components/SignUpLoginButton';
import SidebarNavigation from './components/SidebarNavigation';
import MainContentWelcome from './components/MainContentWelcome';
import MainContentOther from './components/MainContentOther';

import { ViewContext } from './contexts/ViewContext';

import { AppWrap } from './AppStyles';
import { NavContentWrap } from './components/NavContentStyles';

const App = () => {
  const [navItemList, setNavItemList] = useState([]);
  const [navItems, setNavItems] = useState({});
  const [mainContentItem, setMainContentItem] = useState({});
  const [mainContentHeadings, setMainContentHeadings] = useState({});
  const [diveDeeperCards, setDiveDeeperCards] = useState([]);
  const [error, setError] = useState(false);
  const [view, setView] = useState(null);
  const [showMobileNav, setShowMobileNav] = useState(false);

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
        const { innerWidth } = window;
        setNavItemList(navItemList);
        setNavItems(navItems);
        setMainContentHeadings(mainContentHeadings);
        setDiveDeeperCards(diveDeeperCards);
        updateWidth(innerWidth);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const updateWidth = (width) => {
    width < 800 ? setView('mobile') : setView('desktop');
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const renderTopBarRightContent = () => {
    if (view === 'desktop') {
      return (<SignUpLoginButton />);
    } else if (showMobileNav === false) {
      return (
        <div onClick={toggleMobileNav}>
          hamburger
        </div>);
    } else {
      return (
        <div onClick={toggleMobileNav}>
          X
        </div>
      );
    }
  };

  const renderSideNavMainContent = () => {
    const sections = {
      sidebarNavigation: <SidebarNavigation
        navItemList={navItemList}
        navItems={navItems}
        setMainContentItem={setMainContentItem}
        showMobileNav={showMobileNav}
        toggleMobileNav={toggleMobileNav}
      />,
      mainContent: <main>
        <Switch>
          {routes.map((route, index) => {
            const { path, exact } = route;
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                children={<route.component />}
              />
            );
          })}
        </Switch>
      </main>
    };

    const { sidebarNavigation, mainContent } = sections;
    if (view === 'desktop') {
      return (
        <Fragment>
          {sidebarNavigation}
          {mainContent}
        </Fragment>
      );
    } else if (showMobileNav === false) {
      return (mainContent);
    } else {
      return (sidebarNavigation);
    }
  }

  const { pathname } = window.location;
  const mainContentHeading = mainContentHeadings[pathname];

  const routes = [
    {
      path: '/',
      exact: true,
      component: () => (
        <MainContentWelcome
          mainContentHeading={mainContentHeading}
          diveDeeperCards={diveDeeperCards}
        />
      )
    },
    {
      path: pathname,
      exact: true,
      component: () => (
        <MainContentOther mainContentHeading={mainContentHeading}/>
      )
    }
  ];

  if (error) {
    return (<h2>An error has occurred, try again later.</h2>);
  } else if (!view) {
    return (<Spinner />);
  } else if (!mainContentHeadings.hasOwnProperty(pathname)) {
    return (<h2>404 It seems like you found a page that doesn't exist.</h2>);
  } else {
    return (
      <ViewContext.Provider value={view}>
        {console.log(showMobileNav)}
        {console.log(view)}
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