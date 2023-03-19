import React, { useEffect, useState } from 'react';
import { CustomLoadButton } from './LoadMoreButton.styled';
import { useDispatch } from 'react-redux';
import { loadMoreGames } from 'store/gamesReducer/gamesOperation';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) return;
    dispatch(loadMoreGames(page));
  }, [page, dispatch]);

  const incrementPages = () => {
    setPage(page + 1);
  };

  return (
    <CustomLoadButton onClick={incrementPages}>Load More</CustomLoadButton>
  );
};

export default LoadMoreButton;
