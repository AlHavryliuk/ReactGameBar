import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const SearchForm = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    background-color: transparent;
    border: none;
    display: flex;
    cursor: pointer;
  }

  ${mobile`
    display: none;
  `}

  &.mobile-search {
    display: none;

    ${mobile`
      max-width: 100%;
      width: 100%;
      display: flex;
      margin: 30px auto;

      & div {
        width: 75%;

        & input {
          font-size: 30px;
          max-width: 100%;
        }
      }
  `}
  }
`;

export const SearchInput = styled.input`
  max-width: 75%;
  width: 100%;
  font-size: 18px;
  padding: 10px;

  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.headerTextColor};

  &::placeholder {
    color: ${({ theme }) => theme.headerTextColor};
  }
`;

export const SearchIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.headerTextColor};
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  /* border-radius: 10px; */
  border-bottom: 1px solid ${({ theme }) => theme.headerTextColor};
`;
