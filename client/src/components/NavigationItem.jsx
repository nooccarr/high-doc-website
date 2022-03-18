import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ navItem, navSubItems=[], setMainContentItem }) => (
  <div>
    <div>{navItem}</div>
    {navSubItems.map((navSubItem, key) => {
      const { item, route } = navSubItem;
      return (
        <li key={key}>
          <Link
            to={route}
            onClick={() => setMainContentItem(navSubItem)}
          >
            {item}
          </Link>
        </li>
      );
    })}
  </div>
);

export default NavigationItem;