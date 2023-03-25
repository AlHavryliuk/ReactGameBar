import Loader from 'components/Loader/Loader';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenresList } from 'store/genresReducer/genresOperations';
import { select } from 'store/selectors/selectors';


const GenreList = () => {

    const dispatch = useDispatch();
    const genres = useSelector(select.genres)
    const LazyGenreCard = lazy(() =>
        import('../GenreItem/GenreItem'))


    useEffect(() => {
        if (genres) return
        dispatch(getGenresList())
    }, [dispatch, genres])

    return (
        <Suspense fallback={<Loader />  }>
            {genres ? genres.map(({ id, name, image_background }) => <LazyGenreCard key={id} name={name} image={image_background} />) : <Loader />}
        </Suspense>
    )
}

export default GenreList