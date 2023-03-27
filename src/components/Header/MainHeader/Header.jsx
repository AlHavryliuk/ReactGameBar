import React from 'react';
import { CustomSvg, GameHeader, HeaderTitle } from './Header.styled';

import Navigation from '../Navigation/Navigation';
import HeaderContainer from 'components/Custom/HeaderContainer/HeaderContainer';
import Search from 'components/Search/Search';
import svg from '../../../images/icon-spread.svg'


const Header = () => {

  return (
    <GameHeader>
      <HeaderContainer>
        <HeaderTitle to="/" >GameVortex
          {/* <span>🎮</span>  */}
          <CustomSvg width="45px" height="45px">
            <use href={`${svg}#icon-gamepad`}></use>
          </CustomSvg>
        </HeaderTitle>
        <Search />
        <Navigation />
      </HeaderContainer>
    </GameHeader>
  );
};

export default Header;
