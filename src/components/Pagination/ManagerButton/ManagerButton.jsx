import React from 'react';
import NextPage from '../NextPage/NextPage';
import PreviousPage from '../PreviousPage/PreviousPage';
import { PaginationWrapper } from './ManagerButton.styled';
import { useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import { LibaryWarningTitle } from './../../Main/Libary/Libary.styled';

const ManagerButton = () => {
  const games = useSelector(select.gamesList)

  return (
    <>
      {games && games.length ? <PaginationWrapper>
        < PreviousPage />
        <NextPage />
      </PaginationWrapper > : <LibaryWarningTitle>Game list is empty...</LibaryWarningTitle>}
    </>
  );
};

export default ManagerButton;
