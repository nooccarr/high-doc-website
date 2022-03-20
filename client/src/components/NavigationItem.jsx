import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ViewContext } from '../contexts/ViewContext';

import { renderSvg } from '../files/svgs';

import { NavigationItemWrap } from './NavigationItemStyles';

const NavigationItem = ({ navItem, navSubItems=[], setMainContentItem, toggleMobileNav }) => {
  const view = useContext(ViewContext);

  return (
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
              onClick={() => {
                setMainContentItem(navSubItem);
                if (view === 'mobile') toggleMobileNav();
              }}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  </NavigationItemWrap>
);
}

export default NavigationItem;