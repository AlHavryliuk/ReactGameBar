import GameGallery from 'components/Custom/GameGallery/GameGallery';
import Loader from 'components/Loader/Loader';
import GameCard from 'components/Main/GameCard/GameCard';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getGamesList } from 'store/gamesReducer/gamesOperation';
import { select } from 'store/selectors/selectors';

const SearchPage = () => {
    const isLoading = useSelector(select.isLoading);
    const gamesList = useSelector(select.gamesList);
    const searchQuery = useSelector(select.searchQuery);
    const [, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()

    useEffect(() => {
        if (searchQuery === '') return
        setSearchParams({ query: searchQuery })
        dispatch(getGamesList(searchQuery))
        // eslint-disable-next-line
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
    )
}

export default SearchPage