import React, { fragment } from 'react';
import { Link } from 'react-router-dom';

import NavigationIcon from './NavigationIcon';

import { NavigationItemWrap } from './NavigationItemStyles';

const NavigationItem = ({ navItem, navSubItems=[], setMainContentItem }) => (
  <NavigationItemWrap>
    <ul>
      <div>
        <NavigationIcon navItem={navItem} />
        <h2>{navItem}</h2>
      </div>
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
    </ul>
  </NavigationItemWrap>
);


export default NavigationItem;