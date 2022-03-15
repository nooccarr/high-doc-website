import React from 'react';

const Card = ({ detailCard }) => {
  return (
    <div>
      <img src={detailCard.thumbnail} />
      <span>{detailCard.title}</span>
      <p>{detailCard.description}</p>
      <a href={detailCard.link}>Read article</a>
    </div>

  );
};

export default Card;