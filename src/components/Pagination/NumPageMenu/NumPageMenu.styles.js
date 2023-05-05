import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const ItemPage = styled.button`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  border: none;
  padding: 10px;

  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  color: ${({ theme }) => theme.headerTextColor};
  cursor: pointer;
  transition: all 0.5s ease 0s;

  &:hover {
    background-color: ${({ theme }) => theme.loadMoreHoverColor};
    color: ${({ theme }) => theme.mainCardTextColor};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translatey(-10px);

    ${mobile`
        background-color: ${({ theme }) => theme.loadMoreBtnColor};
        color: ${({ theme }) => theme.headerTextColor};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transform: none;
      `}
  }

  &.isActive {
    background-color: ${({ theme }) => theme.headerTextColor};
    color: ${({ theme }) => theme.loadMoreBtnColor};
  }
`;
export const ShamPageItem = styled.div``;

export const NumPageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 0 auto;
  max-width: 1240px;
  padding: 20px;

  ${mobile`
    gap: 5px; 
  `}
`;

export const ReactItemWrapper = styled.div`
  display: flex;
  align-items: end;
`;
