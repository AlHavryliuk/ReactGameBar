import GameGallery from 'components/Custom/GameGallery/GameGallery';
import Loader from 'components/Loader/Loader';
import GameCard from 'components/Main/GameCard/GameCard';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import { getGamesList } from './../../store/gamesReducer/gamesOperation';




const HomePage = () => {

  const isLoading = useSelector(select.isLoading);
  const gamesList = useSelector(select.gamesList);
  const searchQuery = useSelector(select.searchQuery);


  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  useEffect(() => {
    dispatch(getGamesList(searchQuery))
  }, [dispatch, searchQuery])

  return (
    <>
      {isLoading && <Loader />}
      <GameGallery>
        {gamesList &&
          gamesList.map(game => <GameCard key={game.id} game={game} />)}
      </GameGallery>
      <ManagerButton />
    </>
  );
};

export default HomePage;
