import React from 'react';

const NavItem = ({ navItem, navSubItems=[] }) => {

  return (
    <div>
      <div>{navItem}</div>
      {navSubItems.map((navSubItem, key) => {
        return (
          <a
            href={navSubItem.link}
            key={key}
          >
            {navSubItem.item}
          </a>
        )
      })}
    </div>
  );
};

export default NavItem;