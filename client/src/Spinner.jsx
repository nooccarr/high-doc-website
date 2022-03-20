import React from 'react';

import { SpinnerWrap } from './SpinnerStyles';

const Spinner = () => {
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SpinnerWrap>
      <div className="container">
        {items.map((item, key) => (
          <div className={`item-${item}`} key={key}><div></div></div>
        ))}
      </div>
    </SpinnerWrap>
  );
}

export default Spinner;