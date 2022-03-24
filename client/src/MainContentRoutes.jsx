import React, { useEffect } from 'react';

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


const MainContentRoutes = ({ mainContentHeadings, diveDeeperCards, getRoutes }) => {
  useEffect(() => getRoutes(routes), []);

  const routes = [
    {
      path: '/',
      element: <Welcome mainContentHeading={mainContentHeadings['welcome']} diveDeeperCards={diveDeeperCards} />
    },
    {
      path: '/concepts',
      element: <Concepts mainContentHeading={mainContentHeadings['concepts']} />
    },
    {
      path: '/destinations/acoustic',
      element: <Acoustic mainContentHeading={mainContentHeadings['acoustic']} />
    },
    {
      path: '/destinations/asana',
      element: <Asana mainContentHeading={mainContentHeadings['asana']} />
    },
    {
      path: '/destinations/customerio',
      element: <CustomerIo mainContentHeading={mainContentHeadings['customerio']} />
    },
    {
      path: '/destinations/google',
      element: <GoogleAds mainContentHeading={mainContentHeadings['google']} />
    },
    {
      path: '/destinations/pendo',
      element: <Pendo mainContentHeading={mainContentHeadings['pendo']} />
    },
    {
      path: '/destinations/rokt',
      element: <Rokt mainContentHeading={mainContentHeadings['rokt']} />
    },
    {
      path: '/destinations/segment',
      element: <Segment mainContentHeading={mainContentHeadings['segment']} />
    },
    {
      path: '/destinations/tiktok',
      element: <Tiktok mainContentHeading={mainContentHeadings['tiktok']} />
    },
    {
      path: '/destinations/zendesk',
      element: <Zendesk mainContentHeading={mainContentHeadings['zendesk']} />
    },
    {
      path: '/hightouch-audiences/overview',
      element: <Overview mainContentHeading={mainContentHeadings['overview']} />
    },
    {
      path: '/hightouch-audiences/usage',
      element: <Usage mainContentHeading={mainContentHeadings['usage']} />
    },
    {
      path: '/hightouch-audiences/schema',
      element: <Schema mainContentHeading={mainContentHeadings['schema']} />
    },
    {
      path: '/hightouch-audiences/sync-templates',
      element: <SyncTemplates mainContentHeading={mainContentHeadings['sync-templates']} />
    },
    {
      path: '/workspaces/permissions',
      element: <Permissions mainContentHeading={mainContentHeadings['permissions']} />
    },
    {
      path: '/workspaces/pricing',
      element: <Pricing mainContentHeading={mainContentHeadings['pricing']} />
    },
    {
      path: '/security/securitybasics',
      element: <SecurityBasics mainContentHeading={mainContentHeadings['securitybasics']} />
    },
    {
      path: '/security/tunnel',
      element: <Tunnel mainContentHeading={mainContentHeadings['tunnel']} />
    },
    {
      path: '/security/sso',
      element: <Sso mainContentHeading={mainContentHeadings['sso']} />
    },
    {
      path: '*',
      element: <h2>404 It seems like you found a page that doesn't exist.</h2>
    }
  ];

  return (<div></div>);
}

export default MainContentRoutes;