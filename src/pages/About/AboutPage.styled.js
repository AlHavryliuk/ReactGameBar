import styled from 'styled-components';
import {
  SmoothAppearance,
  halfMoveAboutUnderline,
  moveAboutUnderline,
  rotateX,
} from 'utils/animations/animations';
import { mobile } from 'utils/mixins/adaptMixin';

export const AboutTitle = styled.h1`
  color: ${({ theme }) => theme.aboutTextColor};
  padding-left: 40px;
  font-size: 35px;
  position: relative;
  animation: ${SmoothAppearance} 1200ms forwards;

  ${mobile`
      text-align: center;
      padding-left: 0;
  `}

  &::after {
    content: '';
    display: block;
    width: 65%;
    height: 2px;
    position: absolute;
    bottom: -30px;
    left: -40px;
    background-color: ${({ theme }) => theme.aboutTextColor};
    animation: ${halfMoveAboutUnderline} 1100ms ease-in-out forwards;

    ${mobile`
      display: none;
      animation: none
  `}
  }
`;

export const AboutLinks = styled.a`
  color: ${({ theme }) => theme.aboutTextColor};
`;

export const AboutText = styled.p`
  color: ${({ theme }) => theme.aboutTextColor};
  font-size: 22px;
  animation: ${rotateX} 1200ms forwards;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border-radius: 10px;
  padding: 30px 30px;
  ${mobile`
      text-align: center;
  `}
`;

export const AboutSubTitle = styled.h2`
  color: ${({ theme }) => theme.aboutTextColor};
  padding-left: 40px;
  font-size: 28px;
  position: relative;

  ${mobile`
      text-align: center;
      padding-left: 0;
  `}
`;

export const AboutList = styled.ul`
  color: ${({ theme }) => theme.aboutTextColor};

  & svg {
    vertical-align: middle;
    margin-right: 10px;
    fill: ${({ theme }) => theme.aboutTextColor};
  }

  ${mobile`
      text-align: center;
      padding-left: 0;
  `}

  & li {
    font-size: 22px;
    list-style-type: circle;
    margin-top: 5px;

    ${mobile`
      text-align: center;
      list-style-type: none;
  `}

    & a {
      color: ${({ theme }) => theme.aboutTextColor};
    }
  }
`;

export const AboutContactList = styled.ul`
  color: ${({ theme }) => theme.aboutTextColor};

  ${mobile`
      text-align: center;
      padding-left: 0;
  `}

  & li {
    font-size: 22px;

    ${mobile`
      text-align: center;
    
  `}

    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.aboutTextColor};
    }
  }
`;

export const AboutSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  & > div {
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.cardBackgroundColor};
    border-radius: 10px;
  }

  ${mobile`
      grid-template-columns: repeat(1, 1fr);
  `}
`;

export const AboutSubBlockTitle = styled.h2`
  color: ${({ theme }) => theme.aboutTextColor};
  padding-left: 40px;
  font-size: 28px;
  margin-top: 0;
  position: relative;
  animation: ${SmoothAppearance} 1300ms forwards;

  ${mobile`
      text-align: center;
      padding-left: 0;
      margin: 0;
      animation: none;
  `}

  &::after {
    content: '';
    display: block;
    /* width: calc(100% + 80px); */
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -30px;
    left: -40px;
    background-color: ${({ theme }) => theme.aboutTextColor};
    animation: ${moveAboutUnderline} 1100ms ease-in-out forwards;

    ${mobile`
      display: none;
      animation: none
  `};
  }
`;
