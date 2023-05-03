import GameGallery from 'components/Custom/GameGallery/GameGallery';
import CloudLibary from 'components/Main/CloudLibary/CloudLibary';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';

const CloudLibaryPage = () => {
    const dispatch = useDispatch()
    const totalCloudPages = useSelector(select.totalPages)

    useEffect(() => {
        dispatch(setCurrentPage('cloudLibary'));
    }, [dispatch])


    return (
        <>
            <GameGallery>
                <CloudLibary />
            </GameGallery>
            {totalCloudPages !== 1 && <ManagerButton />}
        </>

    )
}

export default CloudLibaryPage