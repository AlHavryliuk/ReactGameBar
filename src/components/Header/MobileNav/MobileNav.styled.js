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
  position: absolute;
  top: 50px;
  right: 50px;
  fill: ${({ theme }) => theme.headerTextColor};
`;
