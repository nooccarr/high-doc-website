import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TopBar from './components/TopBar';
import SidebarNavigation from './components/SidebarNavigation';
import MainContentWelcome from './components/MainContentWelcome';
import MainContentOther from './components/MainContentOther';

const App = () => {
  const [navContentList, setNavContentList] = useState([]);
  const [navContents, setNavContents] = useState({});
  const [mainContentView, setMainContentView] = useState('Welcome');
  const [mainContentHeadings, setMainContentHeadings] = useState({});
  const [diveDeeperCards, setDiveDeeperCards] = useState([]);

  useEffect(() => {
    getSidebarNavigationMainContentData();
  }, []);

  const getSidebarNavigationMainContentData = () => {
    Axios.get('../../server/sampleData/contentData.json')
      .then(({ data }) => {
        const { navContentList, navContents, mainContentHeadings, diveDeeperCards } = data;
        setNavContentList(navContentList);
        setNavContents(navContents);
        setMainContentHeadings(mainContentHeadings);
        setDiveDeeperCards(diveDeeperCards);
      })
      .catch((err) => console.log(err));
  };

  const renderMainContentView = () => {
    const mainContentHeading = mainContentHeadings[mainContentView];
    if (mainContentView === 'Welcome') {
      return (
        <MainContentWelcome
          mainContentHeading={mainContentHeading}
          diveDeeperCards={diveDeeperCards}
        />
      );
    } else {
      return (<MainContentOther mainContentHeading={mainContentHeading} />);
    }
  };

  const changeMainContentView = (item) => {
    setMainContentView(item);
  };

  return (
    <div>
      <TopBar />
      <SidebarNavigation
        navContentList={navContentList}
        navContents={navContents}
        changeMainContentView={changeMainContentView}
      />
      <div>{renderMainContentView()}</div>
    </div>
  );
};

export default App;