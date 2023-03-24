import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreGames } from 'store/gamesReducer/gamesOperation';
import { decrementPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';
import { CustomPrevBtn } from './PreviousPage.styled';

const PreviousPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(select.page);
  const searchQuery = useSelector(select.searchQuery);

  useEffect(() => {
    dispatch(loadMoreGames({ page, searchQuery }));
  }, [page, dispatch, searchQuery]);

  const decrementPages = () => {
    dispatch(decrementPage());
  };

  return (
    <CustomPrevBtn disabled={page === 1} onClick={decrementPages}>
      Previous page
    </CustomPrevBtn>
  );
};

export default PreviousPage;
