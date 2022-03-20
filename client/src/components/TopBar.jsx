import React from 'react';

import { TopBarWrap } from './TopBarStyles';

const TopBar = ({ renderTopBarRightContent }) => (
  <TopBarWrap>
    <div>
      <span className='hightouch'>hightouch</span>
      <div></div>
      <span className='docs'>docs</span>
    </div>
    {renderTopBarRightContent()}
  </TopBarWrap>
);


export default TopBar;