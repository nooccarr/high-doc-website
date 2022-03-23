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
      element: <Welcome mainContentHeading={mainContentHeadings['/']} diveDeeperCards={diveDeeperCards} />
    },
    {
      path: '/concepts',
      element: <Concepts mainContentHeading={mainContentHeadings['/concepts']} />
    },
    {
      path: '/acoustic',
      element: <Acoustic mainContentHeading={mainContentHeadings['/acoustic']} />
    },
    {
      path: '/asana',
      element: <Asana mainContentHeading={mainContentHeadings['/asana']} />
    },
    {
      path: '/customerio',
      element: <CustomerIo mainContentHeading={mainContentHeadings['/customerio']} />
    },
    {
      path: '/google',
      element: <GoogleAds mainContentHeading={mainContentHeadings['/google']} />
    },
    {
      path: '/pendo',
      element: <Pendo mainContentHeading={mainContentHeadings['/pendo']} />
    },
    {
      path: '/rokt',
      element: <Rokt mainContentHeading={mainContentHeadings['/rokt']} />
    },
    {
      path: '/segment',
      element: <Segment mainContentHeading={mainContentHeadings['/segment']} />
    },
    {
      path: '/tiktok',
      element: <Tiktok mainContentHeading={mainContentHeadings['/tiktok']} />
    },
    {
      path: '/zendesk',
      element: <Zendesk mainContentHeading={mainContentHeadings['/zendesk']} />
    },
    {
      path: '/overview',
      element: <Overview mainContentHeading={mainContentHeadings['/overview']} />
    },
    {
      path: '/usage',
      element: <Usage mainContentHeading={mainContentHeadings['/usage']} />
    },
    {
      path: '/schema',
      element: <Schema mainContentHeading={mainContentHeadings['/schema']} />
    },
    {
      path: '/sync-templates',
      element: <SyncTemplates mainContentHeading={mainContentHeadings['/sync-templates']} />
    },
    {
      path: '/permissions',
      element: <Permissions mainContentHeading={mainContentHeadings['/permissions']} />
    },
    {
      path: '/pricing',
      element: <Pricing mainContentHeading={mainContentHeadings['/pricing']} />
    },
    {
      path: '/securitybasics',
      element: <SecurityBasics mainContentHeading={mainContentHeadings['/securitybasics']} />
    },
    {
      path: '/tunnel',
      element: <Tunnel mainContentHeading={mainContentHeadings['/tunnel']} />
    },
    {
      path: '/sso',
      element: <Sso mainContentHeading={mainContentHeadings['/sso']} />
    },
    {
      path: '*',
      element: <h2>404 It seems like you found a page that doesn't exist.</h2>
    }
  ];

  return (<div></div>);
}

export default MainContentRoutes;