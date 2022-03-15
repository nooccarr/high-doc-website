import React from 'react';

import NavItem from './NavItem';

const SidebarNavigation = () => {
  return (
    <div className='Nav'>
      <div className='Nav-Content'>
        {[1, 2, 3].map((item, key) => {
          return (
            <NavItem
              item={item}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavigation;