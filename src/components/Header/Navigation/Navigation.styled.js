import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SmoothAppearance, lineAnimation } from 'utils/animations/animations';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomNavigation = styled.nav`
  /* margin-left: auto; */
`;
export const NavigationLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  /* overflow: hidden; */
  /* width: 0; */
  margin: 0;
  /* animation: ${SmoothAppearance} 1700ms ease forwards; */
  padding: 0 10px;

  ${mobile`
    display: none;
    animation: none;
  `}
`;

export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.headerTextColor};
  text-decoration: none;
  transition: all 0.3s;

  &.active {
    position: relative;
    padding: 5px;
    transition: all 0.3s;
    &::before {
      content: '';
      display: block;
      width: 120%;
      position: absolute;
      bottom: 110%;
      left: -20%;
      background-color: white;
      height: 1px;
      animation: ${lineAnimation} 0.5s linear;
    }

    &::after {
      content: '';
      display: block;
      width: 120%;
      position: absolute;
      top: 110%;
      right: -20%;
      background-color: white;
      height: 1px;
      animation: ${lineAnimation} 0.5s linear;
    }
  }
  &:hover {
    color: ${({ theme }) => theme.headerTextHoverColor};
  }
`;

export const BurgerMenu = styled.svg`
  display: none;
  width: 35px;
  height: 35px;
  fill: ${({ theme }) => theme.headerTextColor};

  ${mobile`
    display: block;
    
  `}
`;
