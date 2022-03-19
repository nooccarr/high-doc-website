import React from 'react';
import { Link } from 'react-router-dom';

import { renderSvg } from '../files/svgs';

import { NavigationItemWrap } from './NavigationItemStyles';

const NavigationItem = ({ navItem, navSubItems=[], setMainContentItem }) => (
  <NavigationItemWrap>
    <ul>
      <div>
        {renderSvg[navItem]}
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