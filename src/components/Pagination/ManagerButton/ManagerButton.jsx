import React, { useEffect } from 'react';
import NextPage from '../NextPage/NextPage';
import PreviousPage from '../PreviousPage/PreviousPage';
import { PaginationWrapper } from './ManagerButton.styled';
import { useDispatch, useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import { LibaryWarningTitle } from './../../Main/Libary/Libary.styled';
import { loadMoreGames } from 'store/gamesReducer/gamesOperation';

const ManagerButton = () => {
  const dispatch = useDispatch();
  const page = useSelector(select.page);
  const games = useSelector(select.gamesList)
  const searchQuery = useSelector(select.searchQuery);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(loadMoreGames({ page, searchQuery }));
  }, [page, dispatch, searchQuery]);

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
