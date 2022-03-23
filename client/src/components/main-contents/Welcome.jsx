import React, { useEffect, useState, Fragment } from 'react';
import Axios from 'axios';

import SectionHeading from './SectionHeading';
import DiveDeeperCard from './DiveDeeperCard';

import { WelcomeWrap } from './WelcomeStyles';

const Welcome = ({ mainContentHeading, diveDeeperCards }) => (
  <Fragment>
    <SectionHeading mainContentHeading={mainContentHeading} />
    <WelcomeWrap>
      <h2>Dive deeper...</h2>
      <div className='cards-container'>
        {diveDeeperCards.map((diveDeeperCard, key) => {
          return (
            <DiveDeeperCard
              diveDeeperCard={diveDeeperCard}
              key={key}
            />
          );
        })}
      </div>
    </WelcomeWrap>
  </Fragment>
);

export default Welcome;