import Loader from 'components/Loader/Loader';
import { successToast } from 'components/Custom/Toaster/toasts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGame, checkByID, removeGame } from 'store/cloudGamesReducer/cloudGamesOperations';
import { addFavoriteGame, removeFavoriteGame } from 'store/favoriteGames/favoriteSlice';
import { reselect, select } from 'store/selectors/selectors';
import DetailsAchievements from './DetailsAchievements/DetailsAchievements';
import DetailsProperties from './DetailsProperties/DetailsProperties';
import { DetailsBlock, DetailsButton, DetailsButtonWrapper, DetailsColorWrapper, DetailsSubTitle, DetailsText } from './Details.styled';


const Details = () => {
  const { id, description_raw,
    background_image_additional,
    name, rating
  } = useSelector(select.selectedGame);
  const localLibaryGames = useSelector(select.localLibaryGames)
  const dispatch = useDispatch()
  const selectedIsLoading = useSelector(select.selectedIsLoading)
  const cloudGames = useSelector(select.cloudLibaryGames)
  const cloudLoading = useSelector(select.cloudIsLoading)
  const tempGame = useSelector(select.tempCloudGame)
  const authComlete = useSelector(reselect.authCompleteSuccess)


  const gameAlreadyAdded = (libary) => {
    if (!libary) return

    return libary.some(({ gameID }) => +gameID === id)
  }

  const handleAddFavoriteGame = () => {
    dispatch(addFavoriteGame({
      gameID: id,
      background_image_additional,
      name
    }))
    successToast(`The game "${name}" has been successfully added to your library`)
  }

  const handleAddGameToCloud = () => {
    const gameID = `${id}`
    const game = { gameID, name, backdrop: background_image_additional, rating }
    dispatch(addGame(game))
  }

  const handleRemoveGameFromCloud = () => {
    const gameID = id
    dispatch(removeGame(gameID))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    if (!id || !authComlete) return
    dispatch(checkByID(id))
  }, [id, dispatch, authComlete])



  const handleRemoveFavoriteGame = () => {
    dispatch(removeFavoriteGame(id))
    successToast(`The game "${name}" has been successfully removed from your library`)
  }


  return (
    <DetailsBlock>
      {selectedIsLoading ? <Loader /> :
        <>
          <DetailsColorWrapper>
            <DetailsSubTitle>Description</DetailsSubTitle>
            <DetailsText>{description_raw}</DetailsText>
          </DetailsColorWrapper>
          <DetailsProperties />
          <DetailsButtonWrapper>
            <DetailsButton onClick={handleAddFavoriteGame} disabled={gameAlreadyAdded(localLibaryGames)}>{gameAlreadyAdded(localLibaryGames) ? `Already added` : `Add to Local Libary`}</DetailsButton>
            <DetailsButton onClick={handleRemoveFavoriteGame} disabled={!gameAlreadyAdded(localLibaryGames)}>Remove from Local Libary</DetailsButton>
            {authComlete && <>
              <DetailsButton onClick={handleAddGameToCloud} disabled={cloudLoading || tempGame}>{gameAlreadyAdded(cloudGames) ? `Already added` : `Add to Cloud Libary`}</DetailsButton>
              <DetailsButton onClick={handleRemoveGameFromCloud} disabled={cloudLoading || !tempGame}>Remove from Cloud Libary</DetailsButton>
            </>}
          </DetailsButtonWrapper>
          <DetailsAchievements />
        </>}

    </DetailsBlock>
  );
};

export default Details;
