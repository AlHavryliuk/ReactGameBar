import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const DetailsPropertyWrapper = styled.div`
  padding: 20px;
`;

export const DetailsPropertiesContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  color: ${({ theme }) => theme.mainTextColor};

  ${mobile`
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  `}
`;

export const PropertiesSubTitle = styled.h2`
  color: ${({ theme }) => theme.mainTextColor};
  text-decoration: underline;
  margin-top: 50px;

  ${mobile`
    text-align: center; 
  `}
`;

export const CustomProperyiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${mobile`
    padding: 0;
  `}

  & span {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    margin-right: 8px;
  }

  & li {
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* align-items: center; */
    font-size: 18px;
  }
`;

export const CustomPropertyIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding: 0;

  & li {
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    fill: ${({ theme }) => theme.detailsIconFillColor};
  }
`;

export const RateSpan = styled.span`
  width: auto;
  border: 1px solid #30d5c8;
  padding: 5px 10px;
  background-color: #2aa5a0;
  background-image: linear-gradient(90deg, #30d5c8, snow, gold,  #30d5c8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
