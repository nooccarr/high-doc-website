import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Welcome from './components/main-contents/Welcome';
import Concepts from './components/main-contents/Concepts';
import Acoustic from './components/main-contents/Acoustic';
import Asana from './components/main-contents/Asana';
import CustomerIo from './components/main-contents/CustomerIo';
import GoogleAds from './components/main-contents/GoogleAds';
import Pendo from './components/main-contents/Pendo';
import Rokt from './components/main-contents/Rokt';
import Segment from './components/main-contents/Segment';
import Tiktok from './components/main-contents/Tiktok';
import Zendesk from './components/main-contents/Zendesk';
import Overview from './components/main-contents/Overview';
import Usage from './components/main-contents/Usage';
import Schema from './components/main-contents/Schema';
import SyncTemplates from './components/main-contents/SyncTemplates';
import Permissions from './components/main-contents/Permissions';
import Pricing from './components/main-contents/Pricing';
import SecurityBasics from './components/main-contents/SecurityBasics';
import Tunnel from './components/main-contents/Tunnel';
import Sso from './components/main-contents/Sso';

const MainContentRoutes = ({ mainContentHeadings, diveDeeperCards }) => (
  <main>
    <Routes>
      <Route
        path='/'
        element={<Welcome mainContentHeading={mainContentHeadings['welcome']} diveDeeperCards={diveDeeperCards} />}
      />
      <Route
        path='/concepts'
        element={<Concepts mainContentHeading={mainContentHeadings['concepts']} />}
      />
      <Route
        path='/destinations/acoustic'
        element={<Acoustic mainContentHeading={mainContentHeadings['acoustic']} />}
      />
      <Route
        path='/destinations/asana'
        element={<Asana mainContentHeading={mainContentHeadings['asana']} />}
      />
      <Route
        path='/destinations/customerio'
        element={<CustomerIo mainContentHeading={mainContentHeadings['customerio']} />}
      />
      <Route
        path='/destinations/google'
        element={<GoogleAds mainContentHeading={mainContentHeadings['google']} />}
      />
      <Route
        path='/destinations/pendo'
        element={<Pendo mainContentHeading={mainContentHeadings['pendo']} />}
      />
      <Route
        path='/destinations/rokt'
        element={<Rokt mainContentHeading={mainContentHeadings['rokt']} />}
      />
      <Route
        path='/destinations/segment'
        element={<Segment mainContentHeading={mainContentHeadings['segment']} />}
      />
      <Route
        path='/destinations/tiktok'
        element={<Tiktok mainContentHeading={mainContentHeadings['tiktok']} />}
      />
      <Route
        path='/destinations/zendesk'
        element={<Zendesk mainContentHeading={mainContentHeadings['zendesk']} />}
      />
      <Route
        path='/hightouch-audiences/overview'
        element={<Overview mainContentHeading={mainContentHeadings['overview']} />}
      />
      <Route
        path='/hightouch-audiences/usage'
        element={<Usage mainContentHeading={mainContentHeadings['usage']} />}
      />
      <Route
        path='/hightouch-audiences/schema'
        element={<Schema mainContentHeading={mainContentHeadings['schema']} />}
      />
      <Route
        path='/hightouch-audiences/sync-templates'
        element={<SyncTemplates mainContentHeading={mainContentHeadings['sync-templates']} />}
      />
      <Route
        path='/workspaces/permissions'
        element={<Permissions mainContentHeading={mainContentHeadings['permissions']} />}
      />
      <Route
        path='/workspaces/pricing'
        element={<Pricing mainContentHeading={mainContentHeadings['pricing']} />}
      />
      <Route
        path='/security/securitybasics'
        element={<SecurityBasics mainContentHeading={mainContentHeadings['securitybasics']} />}
      />
      <Route
        path='/security/tunnel'
        element={<Tunnel mainContentHeading={mainContentHeadings['tunnel']} />}
      />
      <Route
        path='/security/sso'
        element={<Sso mainContentHeading={mainContentHeadings['sso']} />}
      />
      <Route
        path='*'
        element={<h2>404 It seems like you found a page that doesn't exist.</h2>}
      />
    </Routes>
  </main>
);

export default MainContentRoutes;