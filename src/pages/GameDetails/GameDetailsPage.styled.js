import styled from 'styled-components';
import { ratingMove, typing } from 'utils/animations/animations';
import { mobile } from 'utils/mixins/adaptMixin';

export const DetailsContainer = styled.div`
  max-width: 1000px;
  padding: 60px 115px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.detailsIconSubContainer};

  ${mobile`
      padding: 15px 35px;
  `}
`;

export const GameTitle = styled.h1`
  color: ${({ theme }) => theme.mainTextColor};
  display: flex;
  justify-content: space-between;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 3s steps(40, end) forwards;

  ${mobile`
      width: auto;
      justify-content: center; 
      animation: none;
      white-space: normal;
      text-align: center;
  `}
`;

export const GameRating = styled.h2`
  color: ${({ theme }) => theme.mainTextColor};
  padding: 5px 10px;
  margin: 0 0 25px;

  animation: ${ratingMove} 3000ms ease;

  ${mobile`
     padding: 0;
     animation: none
  `}

  & svg {
    fill: ${({ theme }) => theme.ratingIconFillColor};
    margin-left: 10px;
  }
`;

export const RatingBackWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile`
      flex-direction: column;
      align-items: center;
  `}
`;
