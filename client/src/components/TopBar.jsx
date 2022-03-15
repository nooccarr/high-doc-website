import React from 'react';

const TopBar = () => {
  return (
    <div>
      <div>
        <span>hightouch</span>
        <div></div>
        <span>docs</span>
      </div>
      <div>
        <a href='https://app.hightouch.io/signup'>
          <button>sign up</button>
        </a>
        <a href='https://app.hightouch.io/login'>
          <button>login</button>
        </a>
      </div>
    </div>
  );
};

export default TopBar;