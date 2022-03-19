import React from 'react';

import NavigationItem from './NavigationItem';
import { SidebarNavigationWrap } from './SidebarNavigationStyles';

const SidebarNavigation = ({ navItemList, navItems, setMainContentItem }) => (
  <SidebarNavigationWrap>
    <div className='nav-content'>
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
  </SidebarNavigationWrap>
);

export default SidebarNavigation;