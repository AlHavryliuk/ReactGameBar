import GameGallery from 'components/Custom/GameGallery/GameGallery';
import Loader from 'components/Loader/Loader';

import GameCard from 'components/Main/GameCard/GameCard';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesList } from 'store/gamesReducer/gamesOperation';
import { setFirstPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(select.isLoading);
  const gamesList = useSelector(select.gamesList);

  useEffect(() => {
    dispatch(setFirstPage())
    dispatch(getGamesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GameGallery>
        {isLoading && <Loader />}
        {gamesList &&
          gamesList.map(game => <GameCard key={game.id} game={game} />)}
      </GameGallery>
      <ManagerButton />
    </>
  );
};

export default HomePage;
