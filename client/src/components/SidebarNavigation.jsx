import React from 'react';

import NavContent from './NavContent';

const SidebarNavigation = ({ navContentList, navContents, changeMainContent }) => {

  return (
    <div className='Nav'>
      <div className='Nav-Content'>
        {navContentList.map((navContent, key) => {
          return (
            <NavContent
              navContent={navContent}
              navSubContents={navContents[navContent]}
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