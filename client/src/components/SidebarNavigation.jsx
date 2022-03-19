import React from 'react';

import NavigationItem from './NavigationItem';
import SignUpLoginButton from './SignUpLoginButton';

import { SidebarNavigationWrap } from './SidebarNavigationStyles';

const SidebarNavigation = ({ navItemList, navItems, setMainContentItem }) => (
  <SidebarNavigationWrap>
    <div className='nav-content'>
      {navItemList.map((navItem, key) => (
        <NavigationItem
          navItem={navItem}
          navSubItems={navItems[navItem]}
          setMainContentItem={setMainContentItem}
          key={key}
        />
      ))}
    </div>
    <SignUpLoginButton />
  </SidebarNavigationWrap>
);

export default SidebarNavigation;