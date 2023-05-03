import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

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
  color: ${({ theme }) => theme.headerTextColor};
  display: flex;

  & button {
    border-radius: 5px;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: ${({ theme }) => theme.loadMoreHoverColor};
      color: ${({ theme }) => theme.mainCardTextColor};
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

      ${mobile`
        background-color: ${({ theme }) => theme.loadMoreBtnColor};
        color: ${({ theme }) => theme.headerTextColor};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      `}
    }

    &:disabled {
      background-color: ${({ theme }) => theme.loadMoreDisabledColor};

      &:hover {
        background-color: ${({ theme }) => theme.loadMoreDisabledColor};
        color: ${({ theme }) => theme.headerTextColor};
        ${mobile`
      background-color: ${({ theme }) => theme.loadMoreDisabledColor};
  `}
      }
    }
  }
`;
