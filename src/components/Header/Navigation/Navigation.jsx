import {
  BurgerMenu,
  CustomNavigation,
  NavigationLinks,
  NavItem
} from './Navigation.styled';
import icon from '../../../images/icon-spread.svg';
import { useDispatch } from 'react-redux';
import { openMenu } from 'store/mobileNav/mobileNavSlice';


const Navigation = () => {
  const dispatch = useDispatch()

  const handleOpenNavigationMenu = () => {
    dispatch(openMenu())
  }

  return (
    <CustomNavigation>
      <NavigationLinks>
        <NavItem to="/genres">Genres</NavItem>
        <NavItem to="/libary">Libary</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavigationLinks>
      <BurgerMenu onClick={handleOpenNavigationMenu}>
        <use href={`${icon}#icon-paragraph`}></use>
      </BurgerMenu>
    </CustomNavigation>
  );
};

export default Navigation;
