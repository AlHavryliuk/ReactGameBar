import styled from 'styled-components';

export const CustomPrevBtn = styled.button`
  width: 50%;
  font-size: 17px;
  padding: 15px;
  border: none;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  color: ${({ theme }) => theme.loadMoreBtnTextColor};
  cursor: pointer;

  &:disabled {
    background-color: gray;
  }
`;
