import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomAuthSuccess = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  background-color: rgb(35 48 53);
  border-radius: 10px;
  color: ${({ theme }) => theme.headerTextColor};

  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CustomAuthWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const CustomAuthLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(35 48 53);
  padding: 0px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  & > svg {
    fill: ${({ theme }) => theme.headerTextColor};
  }

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
`;

export const SettingsButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(35 48 53);
  padding: 0px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &.active {
    background-color: ${({ theme }) => theme.headerTextColor};
    &:hover {
      & > svg {
        fill: ${({ theme }) => theme.headerTextColor};
      }
    }
    & > svg {
      fill: ${({ theme }) => theme.loadMoreHoverColor};
    }
  }

  & > svg {
    fill: ${({ theme }) => theme.headerTextColor};
  }

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
`;

export const MiniAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
