import React from 'react';

import NavItem from './NavItem';

const SidebarNavigation = ({ navList, navItems }) => {

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