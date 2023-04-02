import styled from 'styled-components';

export const LocalPage = styled.button`
  max-width: 50%;
  width: 100%;
  font-size: 17px;
  padding: 15px;
  border: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  /* color: ${({ theme }) => theme.loadMoreBtnTextColor}; */
  cursor: pointer;
  color: ${({ theme }) => theme.headerTextColor};
  transition: all 0.5s ease 0s;

  &:hover {
    background-color: ${({ theme }) => theme.loadMoreHoverColor};
    color: ${({ theme }) => theme.mainCardTextColor};
  }
`;

export const LoadMoreContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 15px 15px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
