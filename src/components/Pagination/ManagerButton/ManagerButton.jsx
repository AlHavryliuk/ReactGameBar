import React from 'react';
import NextPage from '../NextPage/NextPage';
import PreviousPage from '../PreviousPage/PreviousPage';
import { PaginationWrapper } from './ManagerButton.styled';

const ManagerButton = () => {
  return (
    <PaginationWrapper>
      <PreviousPage />
      <NextPage />
    </PaginationWrapper>
  );
};

export default ManagerButton;
