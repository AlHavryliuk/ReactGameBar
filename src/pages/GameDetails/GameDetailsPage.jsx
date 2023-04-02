import Details from 'components/Main/Details/Details';
import SimpleSlider from 'components/Main/SimpleSlider/SimpleSlider';
import React, { useEffect } from 'react';
import {
  DetailsContainer,
  GameRating,
  GameTitle,
  RatingBackWrapper,
} from './GameDetailsPage.styled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGameDetails,
  getScreenshots,
} from 'store/selectGameReducer/selectGameOperation';
import { select } from 'store/selectors/selectors';
import RatingStars from 'components/Main/RatingStars/RatingStars';
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import GoBackButton from 'components/GoBackButton/GoBackButton';


const GameDetailsPage = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(select.selectedGame);


  useEffect(() => {
    dispatch(setCurrentPage('details'));
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(getGameDetails(gameId))
      .unwrap()
      .then(() => dispatch(getScreenshots(gameId)));
  }, [gameId, dispatch]);

  return (
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
  );
};

export default GameDetailsPage;
