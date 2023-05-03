import AboutContainer from "components/Custom/AboutContainer/AboutContainer";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'store/requestReducer/requestSlice';
import { AboutLinks, AboutList, AboutSubBlockTitle, AboutSubContainer, AboutSubTitle, AboutText, AboutTitle } from "./AboutPage.styled";
import svg from "../../images/icon-spread.svg"

const AboutPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('about'));
        // eslint-disable-next-line
    }, [])


    return (
        <AboutContainer>

            <AboutTitle># Game Vortex</AboutTitle>
            <AboutText>Game Vortex is a non-commercial project created for the purpose of self-education and skills demonstration.
                The project enables users to view, search, and add games to their "favorites" library.

            </AboutText>

            <AboutSubBlockTitle># API</AboutSubBlockTitle>
            <AboutText>The project uses the GameRAWG API to get information about the game.</AboutText>


            <AboutSubContainer>
                <div>
                    <AboutSubTitle># Features</AboutSubTitle>
                    <AboutList>
                        <li>Game information viewing</li>
                        <li>Game search functionality</li>
                        <li>Game search functionality</li>
                        <li>Game filtering by genre</li>
                        <li>Available game achievements viewing</li>
                    </AboutList>
                </div>
                <div>
                    <AboutSubTitle># Technologies Used (Frontend)</AboutSubTitle>
                    <AboutList>
                        <li>React</li>
                        <li>Redux Toolkit</li>
                        <li>React Router DOM</li>
                        <li>Axios</li>
                        <li>Styled Components</li>
                        <li>React Hook Form</li>
                        <li>Simplelightbox</li>
                        <li>React Slick</li>
                        <li>React Spinners</li>
                        <li>React Toastify</li>
                    </AboutList>
                </div>
                <div>
                    <AboutSubTitle># Technologies Used (Backend) </AboutSubTitle>
                    <AboutList>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Bcrypt</li>
                        <li>JSON Web Tokens (JWT)</li>
                        <li>Joi</li>
                        <li>Nodemailer</li>
                        <li>Cors</li>
                        <li>Morgan</li>
                        <li>Dotenv</li>
                        <li>Cross-env</li>
                    </AboutList>
                </div>
                <div>
                    <AboutSubTitle># Technologies Used (Testing) </AboutSubTitle>
                    <AboutList>
                        <li>AVA Testing</li>
                    </AboutList>
                </div>
            </AboutSubContainer>
            <AboutSubBlockTitle># Backend</AboutSubBlockTitle>
            <AboutText>The project uses its own backend. <br /><br />
                The backend supports the ability to authorize and register.
                It is also possible to save games to the cloud library. MongoDB is used as the database. <br /><br />
                You can see the backend code by clicking on the <AboutLinks href="https://github.com/AlekasndrHavryliuk/VortexBackend">link</AboutLinks>.
            </AboutText>
            <AboutSubBlockTitle># Author</AboutSubBlockTitle>

            <AboutSubContainer>
                <div>
                    <AboutSubTitle># Information</AboutSubTitle>
                    <AboutList>
                        <li>Havryliuk Oleksand</li>
                        <li><a target="_blank" rel="noreferrer" href="mailto:gavrfavorite@gmail.com">
                            <svg width={24} height={24}>
                                <use href={`${svg}#icon-envelop`}></use>
                            </svg>gavrfavorite@gmail.com</a>
                        </li>
                        <li><a target="_blank" rel="noreferrer" href="https://github.com/AlekasndrHavryliuk">
                            <svg width={24} height={24}>
                                <use href={`${svg}#icon-github`}></use>
                            </svg>AlekasndrHavryliuk</a>
                        </li>
                    </AboutList>
                </div>

                <div>
                    <AboutSubTitle># Social Links</AboutSubTitle>
                    <AboutList>
                        <li><a target="_blank" rel="noreferrer" href="https://t.me/algavriluk">
                            <svg width={24} height={24}>
                                <use href={`${svg}#icon-telegram`}></use>
                            </svg>@algavriluk</a>
                        </li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.reddit.com/user/HavryliukAl">
                            <svg width={24} height={24}>
                                <use href={`${svg}#icon-reddit`}></use>
                            </svg>HavryliukAl</a>
                        </li>
                        <li><a target="_blank" rel="noreferrer" href="https://instagram.com/al_gavrilyuk?igshid=YmMyMTA2M2Y=">
                            <svg width={24} height={24}>
                                <use href={`${svg}#icon-instagram`}></use>
                            </svg>al_gavrilyuk</a>
                        </li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aleksandr-havryliuk/">
                            <svg width={24} height={24}>
                                <use href={`${svg}#icon-linkedin`}></use>
                            </svg>Aleksandr Havryliuk</a>
                        </li>
                    </AboutList>
                </div>




            </AboutSubContainer>



        </AboutContainer >
    )
}

export default AboutPage