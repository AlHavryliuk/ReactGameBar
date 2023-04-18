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
    const writter = setInterval(() => {
      if (title !== templateTitle) {
        setTitle(() => title.concat(templateTitle[title.length]))
        return
      }
    }, 120)
    return () => {
      clearInterval(writter)
    }
  }, [title])




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
