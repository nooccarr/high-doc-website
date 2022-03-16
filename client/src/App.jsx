import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TopBar from './components/TopBar';
import SidebarNavigation from './components/SidebarNavigation';
import MainContentWelcome from './components/MainContentWelcome';
import MainContentOther from './components/MainContentOther';

const App = () => {
  const [navItemList, setNavItemList] = useState([]);
  const [navItems, setNavItems] = useState({});
  const [mainContentView, setMainContentView] = useState('Welcome');
  const [mainContentHeadings, setMainContentHeadings] = useState({});
  const [diveDeeperCards, setDiveDeeperCards] = useState([]);

  useEffect(() => {
    getSidebarNavMainContentData();
  }, []);

  const getSidebarNavMainContentData = () => {
    Axios.get('../../server/sampleData/contentData.json')
      .then(({ data }) => {
        const { navItemList, navItems, mainContentHeadings, diveDeeperCards } = data;
        setNavItemList(navItemList);
        setNavItems(navItems);
        setMainContentHeadings(mainContentHeadings);
        setDiveDeeperCards(diveDeeperCards);
      })
      .catch((err) => console.log(err));
  };

  const renderMainContentView = () => {
    const mainContentHeading = mainContentHeadings[mainContentView];
    if (mainContentView === 'Welcome') {
      return (
        <MainContentWelcome
          mainContentHeading={mainContentHeading}
          diveDeeperCards={diveDeeperCards}
        />
      );
    } else {
      return (<MainContentOther mainContentHeading={mainContentHeading} />);
    }
  };

  const changeMainContentView = (item) => {
    setMainContentView(item);
  };

  return (
    <div>
      <TopBar />
      <SidebarNavigation
        navItemList={navItemList}
        navItems={navItems}
        changeMainContentView={changeMainContentView}
      />
      <div>{renderMainContentView()}</div>
    </div>
  );
};

export default App;