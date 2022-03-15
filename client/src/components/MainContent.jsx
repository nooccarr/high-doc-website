import React from 'react';

import Card from './Card';

const MainContent = () => {
  return (
    <div>
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
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainContent;;