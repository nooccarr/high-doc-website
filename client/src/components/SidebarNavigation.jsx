import React from 'react';

import NavContent from './NavContent';

const SidebarNavigation = ({ navContentList, navContents, changeMainContentView }) => {
  return (
    <div className='Nav'>
      <div className='Nav-Content'>
        {navContentList.map((navContent, key) => {
          return (
            <NavContent
              navContent={navContent}
              navSubContents={navContents[navContent]}
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