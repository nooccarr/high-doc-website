import React from 'react';

import { renderSvg } from '../files/svgs';

import { DiveDeeperCardWrap } from './DiveDeeperCardStyles';

const DiveDeeperCard = ({ diveDeeperCard }) => {
  const { thumbnail, title, description } = diveDeeperCard;
  const { ReadArticle } = renderSvg;

  return (
    <DiveDeeperCardWrap>
      <img src={thumbnail} alt='Dive deeper card image.' />
      <span className='title'>{title}</span>
      <p>{description}</p>
      <div className='read-article-container'>
        <span>Read article</span>
        <div className='svg-container'>{ReadArticle}</div>
      </div>
    </DiveDeeperCardWrap>
  );
};

export default DiveDeeperCard;