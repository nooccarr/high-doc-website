import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import MainSectionHeading from './MainSectionHeading';
import Card from './Card';

const MainWelcome = ({ mainSectionHeading }) => {
  const [detailCards, setDetailCards] = useState([]);

  useEffect(() => {
    getDetailCards();
  }, []);

  const getDetailCards = () => {
    Axios.get('../../server/sampleData/mainWelcomeData.json')
      .then(({ data }) => {
        setDetailCards(data.cards);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <MainSectionHeading mainSectionHeading={mainSectionHeading} />
      <section>
        <h2>
          <a href='#undefined'>Dive deeper</a>
        </h2>
        <div>
          {detailCards.map((detailCard, key) => {
            return (
              <Card
                detailCard={detailCard}
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