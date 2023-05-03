import GameGallery from 'components/Custom/GameGallery/GameGallery';
import CloudLibary from 'components/Main/CloudLibary/CloudLibary';
import ManagerButton from 'components/Pagination/ManagerButton/ManagerButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import { reselect, select } from 'store/selectors/selectors';

const CloudLibaryPage = () => {
    const dispatch = useDispatch()
    const totalCloudPages = useSelector(select.totalPages)
    const authCompleted = useSelector(reselect.authCompleteSuccess)

    useEffect(() => {
        dispatch(setCurrentPage('cloudLibary'));
    }, [dispatch])


    return (
        <>
            {authCompleted ? <>
                <GameGallery>
                    <CloudLibary />
                </GameGallery>
                {totalCloudPages !== 1 && <ManagerButton />} </> :
                <Navigate to="/libary" />
            }
        </>

    )
}

export default CloudLibaryPage