import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGenresList } from 'store/genresReducer/genresOperations';
import { select } from 'store/selectors/selectors';
import GenreItem from '../GenreItem/GenreItem';

const GenreList = () => {

    const dispatch = useDispatch();
    const genres = useSelector(select.genres)


    useEffect(() => {
        dispatch(getGenresList())
    }, [])

    console.log(genres);
    return (
        <>
            {genres ? genres.map(({ id, name, image_background }) => <GenreItem key={id} name={name} image={image_background} />) : <Loader />}
        </>
    )
}

export default GenreList