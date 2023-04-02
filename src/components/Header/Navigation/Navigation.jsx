import {
  BurgerMenu,
  CustomNavigation,
  NavigationLinks,
  NavItem
} from './Navigation.styled';
import icon from '../../../images/icon-spread.svg';
import { useDispatch } from 'react-redux';
import { openMenu } from 'store/mobileNav/mobileNavSlice';
import LightMode from 'components/LightMode/LightMode';
import { setFirstPage } from 'store/requestReducer/requestSlice';


const Navigation = () => {
  const dispatch = useDispatch()

  const handleOpenNavigationMenu = () => {
    dispatch(openMenu())
  }

  const handleSetFirstPage = () => dispatch(setFirstPage())

  return (
    <CustomNavigation>
      <NavigationLinks>
        <LightMode />
        <NavItem onClick={handleSetFirstPage} to="/genres">Genres</NavItem>
        <NavItem to="/libary">Libary</NavItem>
        <NavItem to="/about">About</NavItem>
      </NavigationLinks>
      <BurgerMenu onClick={handleOpenNavigationMenu}>
        <use href={`${icon}#icon-paragraph`}></use>
      </BurgerMenu>
    </CustomNavigation>
  );
};

export default Navigation;
