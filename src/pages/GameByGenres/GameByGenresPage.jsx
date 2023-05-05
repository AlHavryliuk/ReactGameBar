import GameGallery from "components/Custom/GameGallery/GameGallery";
import { SectionTitle } from "components/Custom/GameGallery/GameGallery.styled";
import Loader from "components/Loader/Loader";
import GameCard from "components/Main/GameCard/GameCard";
import ManagerButton from "components/Pagination/ManagerButton/ManagerButton";
import NumPageMenu from "components/Pagination/NumPageMenu/NumPageMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchGamesByGenre } from "store/gamesReducer/gamesOperation";
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import { select } from "store/selectors/selectors";

const GameByGenresPage = () => {
    const isLoading = useSelector(select.isLoading);
    const gamesList = useSelector(select.gamesList);
    const page = useSelector(select.page);
    const { genre } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        if (!genre) return
        dispatch(setCurrentPage('by Genres'))
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
                <SectionTitle>{`Games in the genre: "${genre}"`}</SectionTitle>
                {gamesList &&
                    gamesList.map(game => <GameCard key={game.id} game={game} />)}
            </GameGallery>
            <NumPageMenu />
            <ManagerButton />
        </>
    )
}

export default GameByGenresPage