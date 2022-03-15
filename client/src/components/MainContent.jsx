import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Card from './Card';

const MainContent = () => {
  const [detailCards, setDetailCards] = useState([]);

  useEffect(() => {
    getDetailCards();
  }, []);

  const getDetailCards = () => {
    Axios.get('../../server/sampleData/mainContentData.json')
      .then(({ data }) => {
        setDetailCards(data.cards);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <section>
        <h1>Hightouch Documentation</h1>
        <p>Get an overview of Hightouch's features, integrations, and how to use them.</p>
      </section>
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

export default MainContent;;