import React from 'react';

import { TopBarWrap } from './TopBarStyles';

const TopBar = ({ renderTopBarRightContent }) => (
  <TopBarWrap>
    <div className='top-bar-left'>
      <span className='hightouch'>hightouch</span>
      <div className='vertical-line'></div>
      <span className='docs'>docs</span>
    </div>
    <div className='top-bar-right'>
      {renderTopBarRightContent()}
    </div>
  </TopBarWrap>
);


export default TopBar;