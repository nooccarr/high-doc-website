import React from 'react';

const Card = ({ mainWelcomeCard }) => {
  const { thumbnail, title, description, link } = mainWelcomeCard;
  return (
    <div>
      <img src={thumbnail} />
      <span>{title}</span>
      <p>{description}</p>
      <a href={link}>Read article</a>
    </div>

  );
};

export default Card;