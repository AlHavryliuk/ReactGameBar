import { AboutHalfBlockApi, AboutList, AboutSubBlockTitle, AboutSubContainer, AboutSubTitle, AboutText } from 'pages/About/AboutPage.styled'
import { useEffect, useRef } from 'react'

const AboutApi = () => {

    const refs = useRef([])

    useEffect(() => {
        const observerOptions = {
            threshold: 0.5
        }

        const observers = refs.current.map((halfBlock) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        halfBlock.classList.add('visible')
                    }
                },
                observerOptions
            )

            observer.observe(halfBlock)
            return observer
        })

        return () => {
            observers.forEach((observer) => {
                observer.disconnect()
            })
        }
    }, [])

    return (
        <>

            <AboutSubBlockTitle ref={((underline) => refs.current.push(underline))}># API</AboutSubBlockTitle>
            <AboutText>The project uses the GameRAWG API to get information about the game.</AboutText>
            <AboutSubContainer>
                <AboutHalfBlockApi ref={((halfBlock1) => refs.current.push(halfBlock1))}>
                    <AboutSubTitle># Features</AboutSubTitle>
                    <AboutList>
                        <li>Game information viewing</li>
                        <li>Game search functionality</li>
                        <li>Game search functionality</li>
                        <li>Game filtering by genre</li>
                        <li>Available game achievements viewing</li>
                    </AboutList>
                </AboutHalfBlockApi>
                <AboutHalfBlockApi ref={((halfBlock2) => refs.current.push(halfBlock2))}>
                    <AboutSubTitle># Technologies Used (Frontend)</AboutSubTitle>
                    <AboutList>
                        <li>React</li>
                        <li>Redux Toolkit</li>
                        <li>React Router DOM</li>
                        <li>Axios</li>
                        <li>Styled Components</li>
                        <li>Intersection Observer</li>
                        <li>React Hook Form</li>
                        <li>Simplelightbox</li>
                        <li>React Slick</li>
                        <li>React Spinners</li>
                        <li>React Toastify</li>
                    </AboutList>
                </AboutHalfBlockApi>
                <AboutHalfBlockApi ref={((halfBlock3) => refs.current.push(halfBlock3))}>
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
                </AboutHalfBlockApi>
                <AboutHalfBlockApi ref={((halfBlock4) => refs.current.push(halfBlock4))}>
                    <AboutSubTitle ># Technologies Used (Testing) </AboutSubTitle>
                    <AboutList>
                        <li>AVA Testing</li>
                    </AboutList>
                </AboutHalfBlockApi>
            </AboutSubContainer>
        </>
    )
}

export default AboutApi