import GameGallery from 'components/Custom/GameGallery/GameGallery';
import GameCard from 'components/Main/GameCard/GameCard';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setFirstPage } from 'store/requestReducer/requestSlice';

import { select } from 'store/selectors/selectors';
import { getGamesList } from './../../store/gamesReducer/gamesOperation';

const HomePage = () => {
  const gamesList = useSelector(select.gamesList);
  const currentPage = useSelector(select.currentPage);
  const dispatch = useDispatch()
  const page = useSelector(select.page);


  useEffect(() => {
    dispatch(setCurrentPage('home'))
    return () => dispatch(setFirstPage());
    // eslint-disable-next-line
  }, [])


  useEffect(() => {
    if (currentPage !== 'home') return
    window.scrollTo(0, 0);
    dispatch(getGamesList(page))


  }, [dispatch, currentPage, page])


  return (
    <>
      <GameGallery>
        {gamesList &&
          gamesList.map(game => <GameCard key={game.id} game={game} />)}
      </GameGallery>
      <ManagerButton />
    </>
  );
};

export default HomePage;
