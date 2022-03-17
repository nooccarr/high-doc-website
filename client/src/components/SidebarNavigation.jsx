import React from 'react';

import NavigationItem from './NavigationItem';

const SidebarNavigation = ({ navItemList, navItems, setMainContentItem }) => {
  return (
    <div className='Nav'>
      <div className='Nav-Content'>
        {navItemList.map((navItem, key) => {
          return (
            <NavigationItem
              navItem={navItem}
              navSubItems={navItems[navItem]}
              setMainContentItem={setMainContentItem}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavigation;