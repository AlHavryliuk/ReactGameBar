import GameGallery from 'components/Custom/GameGallery/GameGallery';
import Loader from 'components/Loader/Loader';
import GameCard from 'components/Main/GameCard/GameCard';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import NumPageMenu from 'components/Pagination/NumPageMenu/NumPageMenu';
import Search from 'components/Search/Search';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchGames } from 'store/gamesReducer/gamesOperation';
import { setCurrentPage, setFullSearchParams } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';

const SearchPage = () => {
    const dispatch = useDispatch()
    const gamesIsLoading = useSelector(select.gamesIsLoading);
    const gamesList = useSelector(select.gamesList);
    const currentPageName = useSelector(select.pageName);
    const searchQuery = useSelector(select.searchQuery);
    const page = useSelector(select.currentPage);
    const [searchParams, setSearchParams] = useSearchParams();


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
        if (currentPageName !== 'search') return
        window.scrollTo(0, 0);
        if (searchQuery !== null) {
            setSearchParams({ game: searchQuery, page })
        }
        dispatch(searchGames({ page, searchQuery }))
        // eslint-disable-next-line
    }, [page, currentPageName, dispatch, searchQuery])


    return (
        <>
            <Search type={`mobile`} />
            {gamesIsLoading && <Loader />}
            <GameGallery>
                {gamesList &&
                    gamesList.map(game => <GameCard key={game.id} game={game} />)}
            </GameGallery>
            {searchQuery && <NumPageMenu />}
            {searchQuery && <ManagerButton />}
        </>
    )
}

export default SearchPage