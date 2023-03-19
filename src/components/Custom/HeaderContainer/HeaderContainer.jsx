import React from 'react';
import { StyledHeaderContainer } from './HeaderContainer.styled';

const HeaderContainer = ({ children }) => {
  return <StyledHeaderContainer>{children}</StyledHeaderContainer>;
};

export default HeaderContainer;
