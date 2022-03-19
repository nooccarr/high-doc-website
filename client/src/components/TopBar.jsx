import React from 'react';

import SignUpLoginButton from './SignUpLoginButton';

import { TopBarWrap } from './TopBarStyles';

const TopBar = () => (
  <TopBarWrap>
    <div>
      <span className='hightouch'>hightouch</span>
      <div></div>
      <span className='docs'>docs</span>
    </div>
    <SignUpLoginButton />
  </TopBarWrap>
);

export default TopBar;