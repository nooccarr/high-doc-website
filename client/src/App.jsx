import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TopBar from './components/TopBar';
import SidebarNavigation from './components/SidebarNavigation';
import MainWelcome from './components/MainWelcome';
import MainOtherDocs from './components/MainOtherDocs';

const App = () => {
  const [navContentList, setNavContentList] = useState([]);
  const [navContents, setNavContents] = useState({});
  const [mainContent, setMainContent] = useState('Welcome');
  const [mainSectionHeadings, setMainSectionHeadings] = useState({});
  const [mainDiveDeeperCards, setMainDiveDeeperCards] = useState([]);

  useEffect(() => {
    getNavSectionMainContentData();
  }, []);

  const getNavSectionMainContentData = () => {
    Axios.get('../../server/sampleData/contentData.json')
      .then(({ data }) => {
        const { navContentList, navContents, mainSectionHeadings, mainDiveDeeperCards } = data;
        setNavContentList(navContentList);
        setNavContents(navContents);
        setMainSectionHeadings(mainSectionHeadings);
        setMainDiveDeeperCards(mainDiveDeeperCards);
      })
      .catch((err) => console.log(err));
  };

  const renderMainContent = () => {
    const mainSectionHeading = mainSectionHeadings[mainContent];
    if (mainContent === 'Welcome') {
      return (
        <MainWelcome
          mainSectionHeading={mainSectionHeading}
          mainDiveDeeperCards={mainDiveDeeperCards}
        />
      );
    } else {
      return (<MainOtherDocs mainSectionHeading={mainSectionHeading} />);
    }
  };

  const changeMainContent = (item) => {
    setMainContent(item);
  };

  return (
    <div>
      <TopBar />
      <SidebarNavigation
        navContentList={navContentList}
        navContents={navContents}
        changeMainContent={changeMainContent}
      />
      <div>{renderMainContent()}</div>
    </div>
  );
};

export default App;