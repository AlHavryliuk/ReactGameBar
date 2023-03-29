
import GameGallery from 'components/Custom/GameGallery/GameGallery';
import Libary from 'components/Main/Libary/Libary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'store/requestReducer/requestSlice';

const LibaryPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('libary'));
        // eslint-disable-next-line
    }, [])

    return (
        <GameGallery>
            <Libary />
        </GameGallery>


    )
}

export default LibaryPage