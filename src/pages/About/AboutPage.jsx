import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'store/requestReducer/requestSlice';

const AboutPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('about'));
        // eslint-disable-next-line
    }, [])


    return (
        <h2 style={{ textAlign: 'center' }}>The page is currently under development. You'll be able to see it in the coming days.</h2>
    )
}

export default AboutPage