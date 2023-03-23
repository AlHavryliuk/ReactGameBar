import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const DetailsBlock = styled.div`
  padding: 30px 0;
`;

export const DetailsSubTitle = styled.h2`
  color: ${({ theme }) => theme.headerTextColor};
  text-decoration: underline;
  ${mobile`
    display: none;
  `}
`;

export const DetailsText = styled.p`
  color: ${({ theme }) => theme.headerTextColor};
  padding: 0 15px;
  font-size: 18px;
`;

export const DetailsColorWrapper = styled.div`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const DetailsButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const DetailsButton = styled.button`
  padding: 15px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.removeAddButtons};
  color: ${({ theme }) => theme.removeAddText};
  cursor: pointer;

  &:disabled {
    background-color: #6c757d;
    border-color: #6c757d;
    cursor: auto;
  }
`;
