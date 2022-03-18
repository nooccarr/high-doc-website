import React from 'react';
import { TopBarWrap } from './TopBarStyles';

const TopBar = () => (
  <TopBarWrap>
    <div>
      <span>hightouch</span>
      <div></div>
      <span>docs</span>
    </div>
    <div>
      <a href='https://app.hightouch.io/signup'>
        <button>Sign up</button>
      </a>
      <a href='https://app.hightouch.io/login'>
        <button>Login</button>
      </a>
    </div>
  </TopBarWrap>
);

export default TopBar;