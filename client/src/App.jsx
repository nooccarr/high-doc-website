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

  useEffect(() => {
    getSidebarNavigation();
    getMainSectionHeadings();
  }, []);

  const getSidebarNavigation = () => {
    Axios.get('../../server/sampleData/sidebarNavData.json')
      .then(({ data }) => {
        setNavList(data.navItemList);
        setNavItems(data.navItems);
      })
      .catch((err) => console.log(err));
  };

  const getMainSectionHeadings = () => {
    Axios.get('../../server/sampleData/mainSectionHeadingData.json')
      .then(({ data }) => {
        setMainSectionHeadings(data);
      })
      .catch((err) => console.log(err));
  };

  const changeMainContent = (item) => {
    setMainContent(item);
  };

  const renderMainContent = () => {
    if (mainContent === 'Welcome') {
      return (
        <MainWelcome
          mainSectionHeading={mainSectionHeadings[mainContent]}
        />
      );
    } else {
      return (
        <MainOtherDocs
          mainSectionHeading={mainSectionHeadings[mainContent]}
        />
      );
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