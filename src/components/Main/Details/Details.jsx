import { successToast } from 'components/Toaster/toasts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteGame, removeFavoriteGame } from 'store/favoriteGames/favoriteSlice';
import { select } from 'store/selectors/selectors';
import DetailsProperties from '../DetailsProperties/DetailsProperties';
import { DetailsBlock, DetailsButton, DetailsButtonWrapper, DetailsColorWrapper, DetailsSubTitle, DetailsText } from './Details.styled';

const Details = () => {
  const { id, description_raw,
    background_image_additional,
    name
  } = useSelector(select.selectedGame);

  const favoriteGames = useSelector(select.favoriteGames)
  const dispatch = useDispatch()
  const gameAlreadyAdded = () => favoriteGames.some(({ id: gameId }) => gameId === id)

  const handleAddFavoriteGame = () => {
    dispatch(addFavoriteGame({
      id,
      background_image_additional,
      name
    }))
    successToast(`The game "${name}" has been successfully added to your library`)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const handleRemoveFavoriteGame = () => {
    dispatch(removeFavoriteGame(id))
    successToast(`The game "${name}" has been successfully removed from your library`)
  }

  return (
    <DetailsBlock>
      <DetailsColorWrapper>
        <DetailsSubTitle>Description</DetailsSubTitle>
        <DetailsText>{description_raw}</DetailsText>
      </DetailsColorWrapper>
      <DetailsProperties />
      <DetailsButtonWrapper>
        <DetailsButton onClick={handleAddFavoriteGame} disabled={gameAlreadyAdded()}>{gameAlreadyAdded() ? `Already added` : `Add to Libary`}  </DetailsButton>
        <DetailsButton onClick={handleRemoveFavoriteGame} disabled={!gameAlreadyAdded()}>Remove from Libary</DetailsButton>
      </DetailsButtonWrapper>

    </DetailsBlock>
  );
};

export default Details;
