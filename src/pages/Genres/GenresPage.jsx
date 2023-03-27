import GameGallery from 'components/Custom/GameGallery/GameGallery'
import { SectionTitle } from 'components/Custom/GameGallery/GameGallery.styled'
import GenreList from 'components/Main/GenreList/GenreList'

const GenresPage = () => {
    
    return (
        <GameGallery>
            <SectionTitle>Genres</SectionTitle>
            <GenreList></GenreList>
        </GameGallery>
    )
}

export default GenresPage