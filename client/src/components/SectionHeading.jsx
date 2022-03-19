import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { SectionHeadingWrap } from './SectionHeadingStyles';

const SectionHeading = ({ mainContentHeading={} }) => {
  const { title, description } = mainContentHeading;
  return (
    <SectionHeadingWrap>
      <svg width="48.64px" height="58.88px" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.35969 0.55957C4.13469 0.55957 0.679688 4.01457 0.679688 8.23957V52.2946C0.679688 56.3596 4.30469 59.4396 8.35969 59.4396H49.3197V56.8796H8.35969C5.59469 56.8796 3.23969 54.8046 3.23969 52.2946C3.23969 49.7846 5.54469 47.9196 8.35969 47.9196H49.3197V0.55957H8.35969ZM8.35969 3.11957H46.7597V45.3596H8.35969C6.44969 45.3596 4.63969 46.0496 3.23969 47.1746V8.23957C3.23969 5.39957 5.51969 3.11957 8.35969 3.11957ZM12.1997 9.51957C10.7997 9.51957 9.63969 10.6796 9.63969 12.0796V17.1996C9.63969 18.5996 10.7997 19.7596 12.1997 19.7596H39.0797C40.4797 19.7596 41.6397 18.5996 41.6397 17.1996V12.0796C41.6397 10.6796 40.4797 9.51957 39.0797 9.51957H12.1997ZM12.1997 12.0796H39.0797V17.1996H12.1997V12.0796Z" fill="#4928ED"/>
      </svg>
      <h1>{title}</h1>
      <h5>{description}</h5>
  </SectionHeadingWrap>
  );
};

export default SectionHeading;