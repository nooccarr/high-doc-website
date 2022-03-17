import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ navItem, navSubItems=[], setMainContentItem }) => {
  return (
    <div>
      <div>{navItem}</div>
      {navSubItems.map((navSubItem, key) => {
        const { item, route } = navSubItem;
        return (
          <Link
            to={route}
            onClick={() => setMainContentItem(navSubItem)}
            key={key}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationItem;