import GameGallery from 'components/Custom/GameGallery/GameGallery';
import Loader from 'components/Loader/Loader';
import GameCard from 'components/Main/GameCard/GameCard';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchGames } from 'store/gamesReducer/gamesOperation';
import { clearSearchQuery, setCurrentPage, setFirstPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';

const SearchPage = () => {
    const isLoading = useSelector(select.isLoading);
    const gamesList = useSelector(select.gamesList);
    const searchQuery = useSelector(select.searchQuery);
    const [, setSearchParams] = useSearchParams();
    const page = useSelector(select.page);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setCurrentPage('search'))
        return () => {
            dispatch(clearSearchQuery())
            dispatch(setFirstPage())
        }
        // eslint-disable-next-line
    }, [])


    useEffect(() => {

        setSearchParams({ game: searchQuery })
        dispatch(searchGames({ page, searchQuery }))
        // eslint-disable-next-line
    }, [searchQuery])

    useEffect(() => {
        if (page === 1) return
        window.scrollTo(0, 0);
        dispatch(searchGames({ page, searchQuery }))
        // eslint-disable-next-line
    }, [page])


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