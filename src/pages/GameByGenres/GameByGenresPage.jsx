import GameGallery from "components/Custom/GameGallery/GameGallery";
import Loader from "components/Loader/Loader";
import GameCard from "components/Main/GameCard/GameCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchGamesByGenre } from "store/gamesReducer/gamesOperation";
import { select } from "store/selectors/selectors";
import { setCurrentPage, setFirstPage } from 'store/requestReducer/requestSlice';
import ManagerButton from "components/Pagination/ManagerButton/ManagerButton";
import { SectionTitle } from "components/Custom/GameGallery/GameGallery.styled";

const GameByGenresPage = () => {
    const isLoading = useSelector(select.isLoading);
    const gamesList = useSelector(select.gamesList);
    const page = useSelector(select.page);
    const { genre } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        if (!genre) return
        dispatch(setCurrentPage('gameByGenres'))
        return () => dispatch(setFirstPage())
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(searchGamesByGenre({ page, genre }))
    }, [page, genre, dispatch])


    return (
        <>
            {isLoading && <Loader />}
            <GameGallery>
                <SectionTitle>{`Games in the genre: ${genre}`}</SectionTitle>
                {gamesList &&
                    gamesList.map(game => <GameCard key={game.id} game={game} />)}
            </GameGallery>
            <ManagerButton />
        </>
    )
}

export default GameByGenresPage