import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreGames } from 'store/gamesReducer/gamesOperation';
import { incrementPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';
import { CustomNextButton } from './NextPage.styled';

const NextPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(select.page);

  useEffect(() => {
    dispatch(loadMoreGames(page));
  }, [page, dispatch]);

  const incrementPages = () => {
    dispatch(incrementPage());
  };

  return <CustomNextButton onClick={incrementPages}>NextPage</CustomNextButton>;
};

export default NextPage;
