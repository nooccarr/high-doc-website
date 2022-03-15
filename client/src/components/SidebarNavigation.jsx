import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import NavItem from './NavItem';

const SidebarNavigation = () => {
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
    <div className='Nav'>
      <div className='Nav-Content'>
        {navList.map((navItem, key) => {
          return (
            <NavItem
              navItem={navItem}
              navSubItems={navItems[navItem]}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavigation;