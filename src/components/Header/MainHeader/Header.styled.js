import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SmoothAppearance } from 'utils/animations/animations';

import { mobile } from 'utils/mixins/adaptMixin';

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

  ${mobile`
      display: none;
  `}

  & span {
    ${mobile`
      display: none;
  `}
  }
`;

export const HeaderDinamicTitle = styled.h2`
  display: none;
  width: 300px;
  text-decoration: none;
  color: ${({ theme }) => theme.headerTextColor};
  font-size: 36px;
  margin: 0;
  text-transform: capitalize;

  ${mobile`
      display: block;
  `}
`;

export const CustomSvg = styled.svg`
  margin-left: 15px;
  opacity: 0;
  animation: ${SmoothAppearance} 0.2s ease 1475ms forwards;

  fill: ${({ theme }) => theme.headerTextColor};

  ${mobile`
      display: none;
  `}
`;
