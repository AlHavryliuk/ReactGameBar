import styled from 'styled-components';

export const CustomLoadButton = styled.button`
  grid-column-start: 2;
  grid-column-end: 4;
  font-size: 17px;
  padding: 15px;
  border: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  color: ${({ theme }) => theme.loadMoreBtnTextColor};
`;
