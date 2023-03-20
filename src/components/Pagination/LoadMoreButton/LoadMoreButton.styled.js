import styled from 'styled-components';

export const CustomLoadButton = styled.button`

  font-size: 17px;
  padding: 15px;
  border: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  color: ${({ theme }) => theme.loadMoreBtnTextColor};
`;
