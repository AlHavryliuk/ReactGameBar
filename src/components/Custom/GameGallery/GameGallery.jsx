import React from 'react';
import { GameGalleryContainer } from './GameGallery.styled';

const GameGallery = ({ children }) => {
  return <GameGalleryContainer>{children}</GameGalleryContainer>;
};

export default GameGallery;
