import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 15px 15px 40px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  font-size: 17px;
  border: none;
  gap: 10px;
  /* text-transform: uppercase; */
  /* background-color: ${({ theme }) => theme.loadMoreBtnColor};
  color: ${({ theme }) => theme.loadMoreBtnTextColor}; */
  display: flex;
`;
