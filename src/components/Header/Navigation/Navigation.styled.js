import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lineAnimation } from 'utils/animations/animations';

export const CustomNavigation = styled.nav`
  margin-left: auto;
`;
export const NavigationLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
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
      height: 2px;
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
      height: 3px;
      animation: ${lineAnimation} 0.5s linear;
    }
  }
  &:hover {
    color: ${({ theme }) => theme.headerTextHoverColor};
  }
`;
