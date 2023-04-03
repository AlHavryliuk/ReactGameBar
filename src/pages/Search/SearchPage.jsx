import GameGallery from 'components/Custom/GameGallery/GameGallery';
import Loader from 'components/Loader/Loader';
import GameCard from 'components/Main/GameCard/GameCard';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import Search from 'components/Search/Search';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchGames } from 'store/gamesReducer/gamesOperation';
import { setCurrentPage, setFullSearchParams } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';

const SearchPage = () => {
    const isLoading = useSelector(select.isLoading);
    const gamesList = useSelector(select.gamesList);
    const currentPage = useSelector(select.currentPage);
    const searchQuery = useSelector(select.searchQuery);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = useSelector(select.page);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setCurrentPage('search'))

        if (searchQuery === '') {
            if (searchParams.get('game') !== '') {
                const game = searchParams.get('game')
                const searchPage = searchParams.get('page')
                dispatch(setFullSearchParams({ query: game, page: searchPage }))
            }
        }
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        if (currentPage !== 'search') return
        window.scrollTo(0, 0);
        if (searchQuery !== null) {
            setSearchParams({ game: searchQuery, page })
        }
        dispatch(searchGames({ page, searchQuery }))
        // eslint-disable-next-line
    }, [page, currentPage, dispatch, searchQuery])


    return (
        <>
            <Search type={`mobile`} />
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