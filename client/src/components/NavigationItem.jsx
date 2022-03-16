import React from 'react';

const NavigationItem = ({ navItem, navSubItems=[], changeMainContentView }) => {
  return (
    <div>
      <div>{navItem}</div>
      {navSubItems.map((navSubItem, key) => {
        const { item } = navSubItem;
        return (
          <a
            href='#undefined'
            key={key}
            onClick={() => changeMainContentView(item)}
          >
            {item}
          </a>
        )
      })}
    </div>
  );
};

export default NavigationItem;