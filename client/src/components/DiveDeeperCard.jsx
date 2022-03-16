import React from 'react';

const DiveDeeperCard = ({ diveDeeperCard }) => {
  const { thumbnail, title, description, link } = diveDeeperCard;
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