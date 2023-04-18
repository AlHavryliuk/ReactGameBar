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


const GameDetailsPage = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector(select.currentPage)
  const game = useSelector(select.selectedGame);
  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(setCurrentPage('details'));
    return () => {
      setTitle('')
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const writter = setInterval(() => {

      if (currentPage !== 'details') {
        clearInterval(writter)
        return
      }
      if (!game) return
      if (title !== game.name) {
        setTitle(() => title.concat(game.name[title.length]))
        return
      }
    }, 150)
    return () => {
      clearInterval(writter)
    }
  }, [title, game, currentPage])




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
