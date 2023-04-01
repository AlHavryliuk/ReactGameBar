import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const AboutTitle = styled.h1`
  color: ${({ theme }) => theme.aboutTextColor};
  padding-left: 40px;
  font-size: 35px;
  position: relative;

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

    ${mobile`
      display: none;
  `}
  }
`;

export const AboutText = styled.p`
  color: ${({ theme }) => theme.aboutTextColor};
  font-size: 22px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.cardBackgroundColor};
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
  `}/* &::after {
    content: '';
    display: block;
    width: 65%;
    height: 2px;
    position: absolute;
    bottom: -30px;
    left: -40px;
    background-color: ${({ theme }) => theme.aboutTextColor};

    ${mobile`
      display: none;
  `}
  } */
`;

export const AboutList = styled.ul`
  color: ${({ theme }) => theme.aboutTextColor};

  ${mobile`
      text-align: center;
      padding-left: 0;
  `}

  & li {
    font-size: 22px;
    list-style-type: circle;

    ${mobile`
      text-align: center;
      list-style-type: none;
  `}

    & a {
      /* text-decoration: none; */
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
  }
`;

export const AboutSubBlockTitle = styled.h2`
  color: ${({ theme }) => theme.aboutTextColor};
  padding-left: 40px;
  font-size: 28px;
  position: relative;

  ${mobile`
      text-align: center;
      padding-left: 0;
  `} 
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -30px;
    left: -40px;
    background-color: ${({ theme }) => theme.aboutTextColor};

    ${mobile`
      display: none;
  `}
  } 
`;
