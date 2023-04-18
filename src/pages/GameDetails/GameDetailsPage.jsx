import Details from 'components/Main/Details/Details';
import SimpleSlider from 'components/Main/SimpleSlider/SimpleSlider';
import React, { useEffect, useState } from 'react';
import {
  DetailsContainer,
  GameRating,
  GameTitle,
  RatingBackWrapper,
} from './GameDetailsPage.styled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAchievements,
  getGameDetails,
  getScreenshots,
} from 'store/selectGameReducer/selectGameOperation';
import { select } from 'store/selectors/selectors';
import RatingStars from 'components/Main/RatingStars/RatingStars';
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import { handleUnderLine } from 'utils/helpers/writeUnderLine';
import { clearSeletedGame } from 'store/selectGameReducer/selectGameSlice';


const GameDetailsPage = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector(select.currentPage)
  const game = useSelector(select.selectedGame);
  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(setCurrentPage('details'));
    return () => {
      dispatch(clearSeletedGame())
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    let intervalId;
    if (game && title !== game.name) {
      intervalId = setInterval(() => {
        setTitle(title + game.name[title.length]);
      }, 150);
    }
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [title, game?.name, currentPage]);



  useEffect(() => {
    dispatch(getGameDetails(gameId))
      .unwrap()
      .then(() => {
        dispatch(getScreenshots(gameId))
        dispatch(getAchievements(gameId))
      });
  }, [gameId, dispatch]);

  return (
    <DetailsContainer>
      {game && (
        <>
          <GameTitle>{handleUnderLine(title, game.name)}</GameTitle>
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
