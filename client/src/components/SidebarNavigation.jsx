import React from 'react';

import NavigationItem from './NavigationItem';
import { SidebarNavigationWrap } from './SidebarNavigationStyle';

const SidebarNavigation = ({ navItemList, navItems, setMainContentItem }) => (
  <SidebarNavigationWrap>
    <div className='Nav-Content'>
      {navItemList.map((navItem, key) => {
        return (
          <ul key={key}>
            <NavigationItem
              navItem={navItem}
              navSubItems={navItems[navItem]}
              setMainContentItem={setMainContentItem}
            />
          </ul>
        );
      })}
    </div>
  </SidebarNavigationWrap>
);

export default SidebarNavigation;