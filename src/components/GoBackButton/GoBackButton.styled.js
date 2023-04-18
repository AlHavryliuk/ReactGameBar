import styled from 'styled-components';
import { arrowMove } from 'utils/animations/animations';
import { mobile } from 'utils/mixins/adaptMixin';

export const BackIcon = styled.span`
  width: 80px;
  font-size: 30px;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  padding-bottom: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  color: ${({ theme }) => theme.loadMoreBtnTextColor};

  transition: all 0.3s ease 0s;
  animation: ${arrowMove} 1200ms ease;

  ${mobile`
    animation: none;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.detailsIconFillColor};
    color: ${({ theme }) => theme.loadMoreBtnTextColor};
  }
`;

export const GoBackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  ${mobile`
      margin-right: 0px;
      margin-bottom: 20px;
  `}
`;
