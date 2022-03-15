import React from 'react';

const NavItem = ({ navItem, navSubItems=[], changeMainContent }) => {

  return (
    <div>
      <div>{navItem}</div>
      {navSubItems.map((navSubItem, key) => {
        const { item } = navSubItem;
        return (
          <a
            href='#undefined'
            key={key}
            onClick={() => changeMainContent(item)}
          >
            {item}
          </a>
        )
      })}
    </div>
  );
};

export default NavItem;