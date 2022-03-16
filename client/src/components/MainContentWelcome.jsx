import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import SectionHeading from './SectionHeading';
import DiveDeeperCard from './DiveDeeperCard';

const MainWelcome = ({ mainContentHeading, diveDeeperCards }) => {
  return (
    <main>
      <SectionHeading mainContentHeading={mainContentHeading} />
      <section>
        <h2>
          <a href='#undefined'>Dive deeper</a>
        </h2>
        <div>
          {diveDeeperCards.map((diveDeeperCard, key) => {
            return (
              <DiveDeeperCard
                diveDeeperCard={diveDeeperCard}
                key={key}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default MainWelcome;