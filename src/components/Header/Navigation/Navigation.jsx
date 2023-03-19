import LightMode from 'components/LightMode/LightMode';
import React from 'react';
import {
  CustomNavigation,
  NavigationLinks,
  NavItem,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <CustomNavigation>
      <NavigationLinks>
        <LightMode />
        <NavItem to="/genres">Genres</NavItem>
        <NavItem to="/libary">Libary</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavigationLinks>
    </CustomNavigation>
  );
};

export default Navigation;
