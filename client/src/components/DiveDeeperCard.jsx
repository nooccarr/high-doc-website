import React from 'react';

const DiveDeeperCard = ({ mainDiveDeeperCard }) => {
  const { thumbnail, title, description, link } = mainDiveDeeperCard;
  return (
    <div>
      <img src={thumbnail} />
      <span>{title}</span>
      <p>{description}</p>
      <a href={link}>Read article</a>
    </div>

  );
};

export default DiveDeeperCard;