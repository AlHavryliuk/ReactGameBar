import React from 'react';
import { CustomSvg, GameHeader, HeaderDinamicTitle, HeaderTitle } from './Header.styled';

import Navigation from '../Navigation/Navigation';
import HeaderContainer from 'components/Custom/HeaderContainer/HeaderContainer';
import Search from 'components/Search/Search';
import svg from '../../../images/icon-spread.svg'
import { select } from 'store/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstPage } from 'store/requestReducer/requestSlice';


const Header = () => {
  const currentPage = useSelector(select.currentPage)
  const dispatch = useDispatch()

  const handleSetFirstPage = () => dispatch(setFirstPage())

  return (
    <GameHeader>
      <HeaderContainer>
        <HeaderTitle to="/" onClick={handleSetFirstPage} >GameVortex
          {/* <span>🎮</span>  */}
          <CustomSvg width="45px" height="45px">
            <use href={`${svg}#icon-gamepad`}></use>
          </CustomSvg>
        </HeaderTitle>
        <HeaderDinamicTitle>{currentPage === 'home' ? 'GameVortex' : currentPage}</HeaderDinamicTitle>
        <Search />
        <Navigation />
      </HeaderContainer>
    </GameHeader>
  );
};

export default Header;
