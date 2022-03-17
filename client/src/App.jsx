import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Styled from 'styled-components';

import TopBar from './components/TopBar';
import SidebarNavigation from './components/SidebarNavigation';
import MainContentWelcome from './components/MainContentWelcome';
import MainContentOther from './components/MainContentOther';

const App = () => {
  const [navItemList, setNavItemList] = useState([]);
  const [navItems, setNavItems] = useState({});
  const [mainContentItem, setMainContentItem] = useState(null);
  const [mainContentHeadings, setMainContentHeadings] = useState({});
  const [diveDeeperCards, setDiveDeeperCards] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getSidebarNavMainContentData();
  }, []);

  const getSidebarNavMainContentData = () => {
    Axios.get('/contentItems')
      .then(({ data }) => {
        const { navItemList, navItems, mainContentHeadings, diveDeeperCards } = data;
        setNavItemList(navItemList);
        setNavItems(navItems);
        setMainContentHeadings(mainContentHeadings);
        setDiveDeeperCards(diveDeeperCards);
        setMainContentItem({
          item: 'Welcome',
          route: '/'
        });
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  if (error) {
    return (<h1>An error has occurred, try again later</h1>);
  } else if (!mainContentItem) {
    return (
      <div>
        loading..
        {/* <img /> */}
      </div>
    );
  } else {
    const { item, route } = mainContentItem;
    const mainContentHeading = mainContentHeadings[item];
    return (
      <Router>
        <div>
          <TopBar />
          <SidebarNavigation
            navItemList={navItemList}
            navItems={navItems}
            setMainContentItem={setMainContentItem}
          />
          <Switch>
            <Route exact path='/'>
              <MainContentWelcome
                mainContentHeading={mainContentHeading}
                diveDeeperCards={diveDeeperCards}
              />
            </Route>
            <Route path={route}>
              <MainContentOther mainContentHeading={mainContentHeading} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;