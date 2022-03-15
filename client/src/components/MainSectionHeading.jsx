import React, { useEffect, useState } from 'react';
import Axios from 'axios';


const MainSectionHeading = ({ mainSectionHeading={} }) => {
  const { title, description } = mainSectionHeading;
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
  </section>
  );
};

export default MainSectionHeading;