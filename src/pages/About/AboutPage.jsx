import AboutContainer from "components/Custom/AboutContainer/AboutContainer";
import AboutApi from "components/Main/About/AboutApi/AboutApi";
import AboutAuthor from "components/Main/About/AboutAuthor/AboutAuthor";
import AboutBackend from "components/Main/About/AboutBackend/AboutBackend";
import AboutVortex from "components/Main/About/AboutVortex/AboutVortex";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'store/requestReducer/requestSlice';

const AboutPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('about'));
        // eslint-disable-next-line
    }, [])

    return (
        <AboutContainer>
            <AboutVortex />
            <AboutApi />
            <AboutBackend />
            <AboutAuthor />
        </AboutContainer >
    )
}

export default AboutPage