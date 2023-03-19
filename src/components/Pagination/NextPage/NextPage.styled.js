import styled from 'styled-components';

export const CustomNextButton = styled.button`
  font-size: 17px;
  padding: 15px;
  width: 50%;
  text-align: center;
  border: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  color: ${({ theme }) => theme.loadMoreBtnTextColor};
`;
