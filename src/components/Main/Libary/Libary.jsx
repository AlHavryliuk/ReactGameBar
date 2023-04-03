import { useSelector, useDispatch } from 'react-redux';
import { reselect } from 'store/selectors/selectors';
import { CustomGameCard, CustomNavLink } from '../GameCard/GameCard.styled';
import { LibaryWarningTitle } from './Libary.styled';
import { useEffect } from 'react';
import { setFirstLocalPage } from 'store/favoriteGames/favoriteSlice';

const Libary = () => {
    const favoriteGames = useSelector(reselect.gamesPagination)
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setFirstLocalPage())
        }
    }, [dispatch])


    return (
        <>
            {favoriteGames.length ?
                favoriteGames.map(({
                    id,
                    background_image_additional,
                    name
                }) => <CustomNavLink key={id} to={`/details/${id}`}>
                        <CustomGameCard>
                            <img
                                width="100%"
                                src={background_image_additional}
                                alt={`game_${name}`}
                            />
                            <h3>{name}</h3>
                        </CustomGameCard>
                    </CustomNavLink>)
                : <LibaryWarningTitle>The list of favorite games is empty...</LibaryWarningTitle>
            }

        </>
    )
}

export default Libary