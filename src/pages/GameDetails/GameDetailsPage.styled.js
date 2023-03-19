import styled from 'styled-components';

export const DetailsContainer = styled.div`
  /* max-width: 940px; */
  max-width: 1000px;
  width: 100%;
  padding: 60px 115px;
  margin: 0 auto;
`;

export const GameTitle = styled.h1`
  color: ${({ theme }) => theme.mainTextColor};
  display: flex;
  justify-content: space-between;
`;

export const GameRating = styled.h2`
  color: ${({ theme }) => theme.mainTextColor};
  padding: 5px 10px;

  & svg {
    fill: ${({ theme }) => theme.ratingIconFillColor};
    margin-left: 10px;
  }
`;
