import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TopBar from './components/TopBar';
import SidebarNavigation from './components/SidebarNavigation';
import MainContent from './components/MainContent';

const App = () => {
  const [navList, setNavList] = useState([]);
  const [navItems, setNavItems] = useState({});

  useEffect(() => {
    getSidebarNavigation();
  }, []);

  const getSidebarNavigation = () => {
    Axios.get('../../server/sampleData/sidebarNavData.json')
      .then(({ data }) => {
        console.log(data);
        setNavList(data.navItemList);
        setNavItems(data.navItems);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <TopBar />
      <SidebarNavigation
        navList={navList}
        navItems={navItems}
      />
      <MainContent />
    </div>
  );
};

export default App;