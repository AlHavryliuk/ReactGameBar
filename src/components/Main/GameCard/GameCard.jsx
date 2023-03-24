import React from 'react';
import { CustomGameCard, CustomNavLink } from './GameCard.styled';

const GameCard = ({ game: { id, name, short_screenshots = '#' } }) => {
  const title = sliceName(name);
  const notFoundImage = 'https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1620'

  return (
    <CustomNavLink to={`/details/${id}`}>
      <CustomGameCard>
        <img
          width="100%"
          // src={background_image}
          src={short_screenshots.length ? short_screenshots[1].image : notFoundImage}
          alt=""
        />
        <h3>{title}</h3>
      </CustomGameCard>
    </CustomNavLink>
  );
};

const sliceName = name => {
  if (name.length > 25) {
    return name.slice(0, 25) + '...';
  }
  return name;
};

export default GameCard;
