import React from 'react';
import { GameHeader, HeaderTitle } from './Header.styled';

import Navigation from '../Navigation/Navigation';
import HeaderContainer from 'components/Custom/HeaderContainer/HeaderContainer';

const Header = () => {
  return (
    <GameHeader>
      <HeaderContainer>
        <HeaderTitle to="/">GameVortex 🎮</HeaderTitle>
        <Navigation />
      </HeaderContainer>
    </GameHeader>
  );
};

export default Header;
