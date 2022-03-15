import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TopBar from './components/TopBar';
import SidebarNavigation from './components/SidebarNavigation';
import MainWelcome from './components/MainWelcome';
import MainOtherDocs from './components/MainOtherDocs';

const App = () => {
  const [navList, setNavList] = useState([]);
  const [navItems, setNavItems] = useState({});
  const [mainContent, setMainContent] = useState('Welcome');
  const [mainSectionHeadings, setMainSectionHeadings] = useState({});
  const [mainWelcomeCards, setMainWelcomeCards] = useState([]);

  useEffect(() => {
    getNavSectionMainContentData();
  }, []);

  const getNavSectionMainContentData = () => {
    Axios.get('../../server/sampleData/sampleData.json')
      .then(({ data }) => {
        const {
          navItemList,
          navItems,
          mainSectionHeadings,
          mainWelcomeCards
        } = data;
        setNavList(navItemList);
        setNavItems(navItems);
        setMainSectionHeadings(mainSectionHeadings);
        setMainWelcomeCards(mainWelcomeCards);
      })
      .catch((err) => console.log(err));
  };

  const changeMainContent = (item) => {
    setMainContent(item);
  };

  const renderMainContent = () => {
    const mainSectionHeading = mainSectionHeadings[mainContent];
    if (mainContent === 'Welcome') {
      return (
        <MainWelcome
          mainSectionHeading={mainSectionHeading}
          mainWelcomeCards={mainWelcomeCards}
        />
      );
    } else {
      return (<MainOtherDocs mainSectionHeading={mainSectionHeading} />);
    }
  };

  return (
    <div>
      <TopBar />
      <SidebarNavigation
        navList={navList}
        navItems={navItems}
        changeMainContent={changeMainContent}
      />
      <div>{renderMainContent()}</div>
    </div>
  );
};

export default App;