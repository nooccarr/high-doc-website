import React from 'react';

const NavContent = ({ navContent, navSubContents=[], changeMainContent }) => {

  return (
    <div>
      <div>{navContent}</div>
      {navSubContents.map((navSubContent, key) => {
        const { item } = navSubContent;
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

export default NavContent;