import GameGallery from 'components/Custom/GameGallery/GameGallery'
import GenreList from 'components/Main/GenreList/GenreList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from 'store/requestReducer/requestSlice'

const GenresPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('genres'));
        // eslint-disable-next-line
    }, [])

    return (
        <GameGallery>
            <GenreList></GenreList>
        </GameGallery>
    )
}

export default GenresPage