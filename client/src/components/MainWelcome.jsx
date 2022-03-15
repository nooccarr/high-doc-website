import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import MainSectionHeading from './MainSectionHeading';
import Card from './Card';

const MainWelcome = ({ mainSectionHeading, mainWelcomeCards }) => {
  return (
    <main>
      <MainSectionHeading mainSectionHeading={mainSectionHeading} />
      <section>
        <h2>
          <a href='#undefined'>Dive deeper</a>
        </h2>
        <div>
          {mainWelcomeCards.map((mainWelcomeCard, key) => {
            return (
              <Card mainWelcomeCard={mainWelcomeCard} key={key} />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default MainWelcome;