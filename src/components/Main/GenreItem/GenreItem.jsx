import { CustomNavLink } from '../GameCard/GameCard.styled';
import { GenreBackground, GenreItemCard } from './GenreItem.styled';

const GenreItem = ({ slug, name, image }) => {
    return (
        <CustomNavLink to={`/genres/${slug}`}>
            <GenreItemCard>
                <GenreBackground src={image} alt="genre__image" width="100%" />
                <h2>{name}</h2>
            </GenreItemCard>
        </CustomNavLink >
    )
}

export default GenreItem