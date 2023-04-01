import AboutContainer from "components/Custom/AboutContainer/AboutContainer";
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import { AboutContactList, AboutList, AboutSubBlockTitle, AboutSubContainer, AboutSubTitle, AboutText, AboutTitle } from "./AboutPage.styled";

const AboutPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('about'));
        // eslint-disable-next-line
    }, [])


    return (
        <AboutContainer>
            <AboutTitle># React Game Library</AboutTitle>
            <AboutText>This project allows you to view a library of games, search for a game by genre or name, and view detailed information about a specific game. The project uses the GameRAWG API.</AboutText>


            <AboutSubBlockTitle># API</AboutSubBlockTitle>
            <AboutText>This project uses the GameRAWG API.</AboutText>


            <AboutSubContainer>
                <div>
                    <AboutSubTitle># Features</AboutSubTitle>
                    <AboutList>
                        <li>View a library of games</li>
                        <li>Search for games by genre or name</li>
                        <li> View detailed information about a specific game</li>
                    </AboutList>
                </div>
                <div>
                    <AboutSubTitle># Technologies Used</AboutSubTitle>
                    <AboutList>
                        <li>React</li>
                        <li>Redux Toolkit</li>
                        <li>Axios</li>
                        <li>React Router</li>
                        <li>Styled Components</li>
                    </AboutList>
                </div>
            </AboutSubContainer>
            <AboutSubBlockTitle># Author</AboutSubBlockTitle>
            <AboutContactList>
                <li>— Havryliuk Oleksand</li>
                <li><a href="mailto:gavrfavorite@gmail.com">— gavrfavorite@gmail.com</a></li>
                <li><a href="https://t.me/algavriluk">— Telegram</a></li>
            </AboutContactList>
        </AboutContainer >
    )
}

export default AboutPage