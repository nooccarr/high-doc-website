import React from 'react';

import NavItem from './NavItem';

const SidebarNavigation = ({ navList, navItems, changeMainContent }) => {

  return (
    <div className='Nav'>
      <div className='Nav-Content'>
        {navList.map((navItem, key) => {
          return (
            <NavItem
              navItem={navItem}
              navSubItems={navItems[navItem]}
              changeMainContent={changeMainContent}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavigation;