import GoBackButton from 'components/GoBackButton/GoBackButton';
import Details from 'components/Main/Details/Details';
import RatingStars from 'components/Main/Details/RatingStars/RatingStars';
import SimpleSlider from 'components/Main/Details/SimpleSlider/SimpleSlider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import {
  getAchievements,
  getGameDetails,
  getScreenshots,
} from 'store/selectGameReducer/selectGameOperation';
import { clearSeletedGame } from 'store/selectGameReducer/selectGameSlice';
import { select } from 'store/selectors/selectors';
import {
  DetailsContainer,
  GameRating,
  GameTitle,
  RatingBackWrapper,
} from './GameDetailsPage.styled';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';


const GameDetailsPage = () => {
  const selectedIsLoading = useSelector(select.selectedIsLoading)
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(select.selectedGame);


  useEffect(() => {
    dispatch(setCurrentPage('details'));
    return () => {
      dispatch(clearSeletedGame())
    }
    // eslint-disable-next-line
  }, [])




  useEffect(() => {
    dispatch(getGameDetails(gameId))
      .unwrap()
      .then(() => {
        dispatch(getScreenshots(gameId))
        dispatch(getAchievements(gameId))
      });
  }, [gameId, dispatch]);

  return (
    <>
      {selectedIsLoading && <Loader />}
      <DetailsContainer>
        {game && (
          <>
            <GameTitle>{game.name}</GameTitle>
            <RatingBackWrapper >
              <GameRating>
                {game.rating.toFixed(1)}
                <RatingStars rating={game.rating}></RatingStars>
              </GameRating>
              <GoBackButton />
            </RatingBackWrapper>
            <SimpleSlider />
            <Details />
          </>
        )}
      </DetailsContainer>
      <Footer />
    </>
  );
};

export default GameDetailsPage;
