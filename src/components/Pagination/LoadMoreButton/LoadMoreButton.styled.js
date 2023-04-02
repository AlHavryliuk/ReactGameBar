import styled from 'styled-components';

export const LocalPage = styled.button`
  max-width: 50%;
  width: 100%;
  font-size: 17px;
  padding: 15px;
  border: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  color: ${({ theme }) => theme.loadMoreBtnTextColor};
`;

export const LoadMoreContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 15px 15px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px
`;
