import React from 'react';
import { TopBarWrap } from './TopBarStyles';

const TopBar = () => (
  <TopBarWrap>
    <div>
      <span className='hightouch'>hightouch</span>
      <div></div>
      <span className='docs'>docs</span>
    </div>
    <div>
      <button className='signup'>Sign up</button>
      <button className='login'>Login</button>
    </div>
  </TopBarWrap>
);

export default TopBar;