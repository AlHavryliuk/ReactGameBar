import { useSelector } from 'react-redux';
import { reselect } from 'store/selectors/selectors';
import { CustomGameCard, CustomNavLink } from '../GameCard/GameCard.styled';
import { LibaryWarningTitle } from './Libary.styled';

const Libary = () => {
    const favoriteGames = useSelector(reselect.gamesPagination)

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