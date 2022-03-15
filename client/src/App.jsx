import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TopBar from './components/TopBar';
import SidebarNavigation from './components/SidebarNavigation';
import MainContent from './components/MainContent';

const App = () => {
  const [view, setView] = useState('main-content');
  const [navList, setNavList] = useState([]);
  const [navItems, setNavItems] = useState({});

  useEffect(() => {
    getSidebarNavigation();
  }, []);

  const getSidebarNavigation = () => {
    Axios.get('../../server/sampleData/sidebarNavData.json')
      .then(({ data }) => {
        setNavList(data.navItemList);
        setNavItems(data.navItems);
      })
      .catch((err) => console.log(err));
  };

  const renderView = () => {
    if (view === 'main-content') {
      return (<MainContent />);
    }
  };

  return (
    <div>
      <TopBar />
      <SidebarNavigation
        navList={navList}
        navItems={navItems}
      />
      <div>{renderView()}</div>
    </div>
  );
};

export default App;