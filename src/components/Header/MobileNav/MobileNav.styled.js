import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MobileNavPopup = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.headerBackgroundColor}; ;
`;

export const MobileNavItem = styled(NavLink)`
  color: ${({ theme }) => theme.headerTextColor};
  text-decoration: none;
  font-size: 40px;
`;

export const MobileCloseButton = styled.svg`
  width: 40px;
  height: 40px;
`;

export const MobileHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  fill: ${({ theme }) => theme.headerTextColor};

  & button {
    width: 55px;
    height: 55px;
    fill: black 
  }

  & svg {
    width: 40px;
    height: 40px;
  }
`;
