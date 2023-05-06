import Authorization from 'components/Authorization/Authorization';
import HeaderContainer from 'components/Custom/HeaderContainer/HeaderContainer';
import Search from 'components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';
import svg from '../../../images/icon-spread.svg';
import Burger from '../Burger/Burger';
import { CustomSvg, GameHeader, HeaderDinamicTitle, HeaderTitle } from './Header.styled';


const Header = () => {
  const currentPageName = useSelector(select.pageName)
  const dispatch = useDispatch()
  const handleSetFirstPage = () => dispatch(setFirstPage())

  return (
    <GameHeader>
      <HeaderContainer>
        <HeaderTitle to="/" onClick={handleSetFirstPage}>GameVortex
          <CustomSvg width="45px" height="45px">
            <use href={`${svg}#icon-gamepad`}></use>
          </CustomSvg>
        </HeaderTitle>
        <HeaderDinamicTitle>{currentPageName === 'home' ? 'GameVortex' : currentPageName}</HeaderDinamicTitle>
        <Search />
        <Burger />
        <Authorization headerAuth />
      </HeaderContainer>
    </GameHeader>
  );
};

export default Header;
