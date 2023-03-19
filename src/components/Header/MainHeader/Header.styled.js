import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lineAnimation } from 'utils/animations/animations';

export const GameHeader = styled.header`
  width: 100%;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  border-bottom: 0.3px solid white;
`;

export const HeaderTitle = styled(NavLink)`
  width: 300px;
  text-decoration: none;
  color: ${({ theme }) => theme.headerTextColor};
  font-size: 36px;
  display: flex;
  align-items: center;


  /* &.active {
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      height: 2px;
      width: 120%;
      background-color: white;
      bottom: 0;
      left: 0;
      animation: ${lineAnimation} 0.5s linear;
    }
  } */
`;
