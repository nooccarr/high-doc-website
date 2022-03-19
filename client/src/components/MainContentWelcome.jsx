import React, { useEffect, useState, Fragment } from 'react';
import Axios from 'axios';

import SectionHeading from './SectionHeading';
import DiveDeeperCard from './DiveDeeperCard';

import { MainContentWelcomeWrap } from './MainContentWelcomeStyles';

const MainContentWelcome = ({ mainContentHeading, diveDeeperCards }) => (
  <Fragment>
    <SectionHeading mainContentHeading={mainContentHeading} />
    <MainContentWelcomeWrap>
      <h4>Dive deeper...</h4>
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
    </MainContentWelcomeWrap>
  </Fragment>
);

export default MainContentWelcome;