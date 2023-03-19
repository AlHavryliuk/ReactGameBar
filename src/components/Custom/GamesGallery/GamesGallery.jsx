import React from 'react';
import { GameGalleryContainer } from './GamesGallery.styled';

const GameGallery = ({ children }) => {
  return <GameGalleryContainer>{children}</GameGalleryContainer>;
};

export default GameGallery;
