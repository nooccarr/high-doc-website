import React, { Fragment, useContext } from 'react';

import NavigationItem from './NavigationItem';
import SignUpLoginButton from './SignUpLoginButton';

import { ViewContext } from '../contexts/ViewContext';

import { SidebarNavigationWrap } from './SidebarNavigationStyles';

const SidebarNavigation = ({ navItemList, navItems, setMainContentItem, showMobileNav, toggleMobileNav }) => {
  const view = useContext(ViewContext);

  const renderSignUpLoginButton = () => {
    if (view === 'mobile' && showMobileNav) {
      return (<SignUpLoginButton />);
    }
  };

  return (
    <Fragment>
      <SidebarNavigationWrap>
        <div className='nav-container'>
          <div className='nav-content'>
            {navItemList.map((navItem, key) => (
              <NavigationItem
                navItem={navItem}
                navSubItems={navItems[navItem]}
                setMainContentItem={setMainContentItem}
                toggleMobileNav={toggleMobileNav}
                key={key}
              />
            ))}
          </div>
        </div>
      </SidebarNavigationWrap>
      {renderSignUpLoginButton()}
    </Fragment>
  );
};

export default SidebarNavigation;