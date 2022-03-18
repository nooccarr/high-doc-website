import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { SectionHeadingWrap } from './SectionHeadingStyles';

const SectionHeading = ({ mainContentHeading={} }) => {
  const { title, description } = mainContentHeading;
  return (
    <SectionHeadingWrap>
      <h1>{title}</h1>
      <p>{description}</p>
  </SectionHeadingWrap>
  );
};

export default SectionHeading;