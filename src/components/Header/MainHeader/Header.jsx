import React from 'react';
import { GameHeader, HeaderTitle } from './Header.styled';

import Navigation from '../Navigation/Navigation';
import HeaderContainer from 'components/Custom/HeaderContainer/HeaderContainer';
import Search from 'components/Search/Search';
import { useDispatch } from 'react-redux';
import { clearSearchQuery, setFirstPage } from 'store/requestReducer/requestSlice';

const Header = () => {
  const dispatch = useDispatch()
  const handleGoHomePage = () => {
    dispatch(setFirstPage())
    dispatch(clearSearchQuery())
  }

  return (
    <GameHeader>
      <HeaderContainer>
        <HeaderTitle to="/" onClick={handleGoHomePage}>GameVortex <span>🎮</span> </HeaderTitle>
        <Search />
        <Navigation />
      </HeaderContainer>
    </GameHeader>
  );
};

export default Header;
