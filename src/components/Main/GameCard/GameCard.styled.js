import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomGameCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  transition: all 0.5s;

  & img {
    object-fit: cover;
    /* height: 175px; */
    height: 200px;
  }

  & h3 {
    color: ${({ theme }) => theme.mainTextColor};
    text-align: center;
    padding: 0 0 20px;
  }

  &:hover {
    scale: 1.05;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

    ${mobile`
      scale: 1;
      box-shadow: none;
  `}
  }

  &::after {
    content: '';
    display: block;
    height: 200px;
    width: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    background-image: linear-gradient(45deg, black, transparent);
  }
`;

export const CustomNavLink = styled(NavLink)`
  text-decoration: none;
`;
