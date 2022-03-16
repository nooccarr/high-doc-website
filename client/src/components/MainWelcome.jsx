import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import MainSectionHeading from './MainSectionHeading';
import DiveDeeperCard from './DiveDeeperCard';

const MainWelcome = ({ mainSectionHeading, mainDiveDeeperCards }) => {
  return (
    <main>
      <MainSectionHeading mainSectionHeading={mainSectionHeading} />
      <section>
        <h2>
          <a href='#undefined'>Dive deeper</a>
        </h2>
        <div>
          {mainDiveDeeperCards.map((mainDiveDeeperCard, key) => {
            return (
              <DiveDeeperCard mainDiveDeeperCard={mainDiveDeeperCard} key={key} />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default MainWelcome;