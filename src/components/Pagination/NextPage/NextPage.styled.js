import styled from 'styled-components';

export const CustomNextButton = styled.button`
  font-size: 17px;
  padding: 15px;
  width: 50%;
  text-align: center;
  border: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  /* color: ${({ theme }) => theme.loadMoreBtnTextColor}; */
  color: ${({ theme }) => theme.headerTextColor};
  cursor: pointer;

  transition: all 0.5s ease 0s;

  &:hover {
    background-color: ${({ theme }) => theme.loadMoreHoverColor};
    color: ${({ theme }) => theme.mainCardTextColor};
  }
`;
