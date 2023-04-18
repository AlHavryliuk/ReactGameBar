import { useEffect, useState } from 'react';
import { CustomSvg, GameHeader, HeaderDinamicTitle, HeaderTitle } from './Header.styled';

import HeaderContainer from 'components/Custom/HeaderContainer/HeaderContainer';
import Search from 'components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';
import svg from '../../../images/icon-spread.svg';
import Navigation from '../Navigation/Navigation';
import { handleUnderLine } from 'utils/helpers/writeUnderLine';


const Header = () => {
  const currentPage = useSelector(select.currentPage)
  const [title, setTitle] = useState('')
  const templateTitle = 'GameVortex'
  const dispatch = useDispatch()

  useEffect(() => {
    let intervalId;
    if (title !== templateTitle) {
      intervalId = setInterval(() => {
        setTitle(title + templateTitle[title.length]);
      }, 120);
    }
    return () => clearInterval(intervalId);
  }, [title, templateTitle]);


  const handleSetFirstPage = () => dispatch(setFirstPage())

  return (
    <GameHeader>
      <HeaderContainer>
        <HeaderTitle to="/" onClick={handleSetFirstPage}>{handleUnderLine(title, templateTitle)}
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
