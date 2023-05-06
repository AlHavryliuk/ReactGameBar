import GameGallery from 'components/Custom/GameGallery/GameGallery';
import Loader from 'components/Loader/Loader';
import GameCard from 'components/Main/GameCard/GameCard';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';
import { getGamesList } from './../../store/gamesReducer/gamesOperation';
import NumPageMenu from 'components/Pagination/NumPageMenu/NumPageMenu';

const HomePage = () => {
  const dispatch = useDispatch()
  const gamesList = useSelector(select.gamesList);
  const currentPageName = useSelector(select.pageName);
  const gamesIsLoading = useSelector(select.gamesIsLoading);
  const currentPage = useSelector(select.currentPage);


  useEffect(() => {
    dispatch(setCurrentPage('home'))
    // eslint-disable-next-line
  }, [])


  useEffect(() => {
    if (currentPageName !== 'home') return
    window.scrollTo(0, 0);
    dispatch(getGamesList(currentPage))
  }, [dispatch, currentPageName, currentPage])

  return (
    <>
      {gamesIsLoading && <Loader />}
      <GameGallery>
        {gamesList &&
          gamesList.map(game => <GameCard key={game.id} game={game} />)}
      </GameGallery>
      <NumPageMenu />
      <ManagerButton />

      <footer />
    </>
  );
};

export default HomePage;
