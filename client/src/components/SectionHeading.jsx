import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const SectionHeading = ({ mainContentHeading={} }) => {
  const { title, description } = mainContentHeading;
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
  </section>
  );
};

export default SectionHeading;