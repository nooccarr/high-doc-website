import React from 'react';
import { DiveDeeperCardWrap } from './DiveDeeperCardStyles';


const DiveDeeperCard = ({ diveDeeperCard }) => {
  const { thumbnail, title, description } = diveDeeperCard;
  return (
    <DiveDeeperCardWrap>
      <img src={thumbnail} />
      <span className='title'>{title}</span>
      <p>{description}</p>
      <div className='read-article-container'>
        <span>Read article</span>
        <div className='svg-container'>
          <svg width="10.67" height="10.67" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00033 1.66634L5.06033 2.60634L8.78032 6.33301L0.666992 6.33301V7.66634L8.78032 7.66634L5.05366 11.3863L6.00033 12.333L11.3337 6.99967L6.00033 1.66634Z" fill="#9CA3AF" stroke="#9CA3AF"/>
          </svg>
        </div>
      </div>
    </DiveDeeperCardWrap>

  );
};

export default DiveDeeperCard;