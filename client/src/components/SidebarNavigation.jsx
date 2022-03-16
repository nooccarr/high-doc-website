import React from 'react';

import NavigationItem from './NavigationItem';

const SidebarNavigation = ({ navItemList, navItems, changeMainContentView }) => {
  return (
    <div className='Nav'>
      <div className='Nav-Content'>
        {navItemList.map((navItem, key) => {
          return (
            <NavigationItem
              navItem={navItem}
              navSubItems={navItems[navItem]}
              changeMainContentView={changeMainContentView}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavigation;