import React from 'react';
import { GameHeader, HeaderTitle } from './Header.styled';

import Navigation from '../Navigation/Navigation';
import HeaderContainer from 'components/Custom/HeaderContainer/HeaderContainer';
import Search from 'components/Search/Search';


const Header = () => {

  return (
    <GameHeader>
      <HeaderContainer>
        <HeaderTitle to="/" >GameVortex <span>🎮</span> </HeaderTitle>
        <Search />
        <Navigation />
      </HeaderContainer>
    </GameHeader>
  );
};

export default Header;
