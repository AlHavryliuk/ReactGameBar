import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const AuthorizationWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 20px;

  &.headerAuth {
    ${mobile`
      display: none;
    `}
  }

  &.subHeaderAuth {
    & > button {
      ${mobile`
        max-width: 50%;
        width: 100%;
      `}
    }

    ${mobile`
      justify-content: center;
      padding: 10px 20px;
      font-size: 20px;
    `}
  }

  border-radius: 10px;
  & > button {
    border: 1px solid #505050;
    padding: 5px 25px;
    border-radius: 10px;
    font-size: 15 px;
    background-color: rgb(35 48 53);
    color: ${({ theme }) => theme.headerTextColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    cursor: pointer;

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
  }
`;
export const LoginBtn = styled.button`
  max-width: 60%;
  width: 100%;

  ${mobile`
      width: auto;
      max-width: none;
  `}
`;
export const SignUpWrapper = styled.button`
  max-width: 40%;
  width: 100%;

  ${mobile`
      width: auto;
      max-width: none;
  `}
`;
