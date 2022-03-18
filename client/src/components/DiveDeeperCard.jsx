import React from 'react';
import { DiveDeeperCardWrap } from './DiveDeeperCardStyles';


const DiveDeeperCard = ({ diveDeeperCard }) => {
  const { thumbnail, title, description, link } = diveDeeperCard;
  return (
    <DiveDeeperCardWrap>
      <img src={thumbnail} />
      <span>{title}</span>
      <p>{description}</p>
      <a href={link}>Read article</a>
    </DiveDeeperCardWrap>

  );
};

export default DiveDeeperCard;