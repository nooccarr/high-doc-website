import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { renderSvg } from '../../files/svgs';

import { SectionHeadingWrap } from './SectionHeadingStyles';

const SectionHeading = ({ mainContentHeading={} }) => {
  const { title, description } = mainContentHeading;
  const { BookIcon } = renderSvg;

  return (
    <SectionHeadingWrap>
      {BookIcon}
      <h1>{title}</h1>
      <p>{description}</p>
    </SectionHeadingWrap>
  );
};

export default SectionHeading;