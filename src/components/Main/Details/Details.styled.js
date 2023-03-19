import styled from 'styled-components';

export const DetailsBlock = styled.div`
  padding: 30px 0;
`;

export const DetailsSubTitle = styled.h2`
  color: ${({ theme }) => theme.mainTextColor};
  text-decoration: underline;

`;

export const DetailsText = styled.p`
  color: ${({ theme }) => theme.mainTextColor};
  padding: 0 15px;
  font-size: 18px;
`;

export const DetailsColorWrapper = styled.div`
  background-color: #ff000036;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
`;
