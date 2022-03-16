import React from 'react';

const NavContent = ({ navContent, navSubContents=[], changeMainContentView }) => {
  return (
    <div>
      <div>{navContent}</div>
      {navSubContents.map((navSubContent, key) => {
        const { content } = navSubContent;
        return (
          <a
            href='#undefined'
            key={key}
            onClick={() => changeMainContentView(content)}
          >
            {content}
          </a>
        )
      })}
    </div>
  );
};

export default NavContent;