import LightMode from 'components/LightMode/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstPage } from 'store/requestReducer/requestSlice';
import { reselect, select } from 'store/selectors/selectors';

import {
  CustomNavigation,
  NavItem,
  NavigationLinks
} from './Navigation.styled';


const Navigation = () => {
  const dispatch = useDispatch()
  const authComplete = useSelector(reselect.authCompleteSuccess)
  const user = useSelector(select.userData)
  const userRole = user?.role ?? 'user'

  const handleSetFirstPage = () => dispatch(setFirstPage())

  return (
    <CustomNavigation>
      <NavigationLinks>
        <NavItem onClick={handleSetFirstPage} to="/genres">Genres</NavItem>
        <NavItem to="/libary">Locale Libary</NavItem>
        {authComplete && <NavItem onClick={handleSetFirstPage} to="/cloudLibary">Cloud Libary</NavItem>}
        {userRole === 'admin' && <NavItem onClick={handleSetFirstPage} to="/adminPanel">Admin Panel</NavItem>}
        <NavItem to="/about">About</NavItem>
        <LightMode />
      </NavigationLinks>

    </CustomNavigation>
  );
};

export default Navigation;
