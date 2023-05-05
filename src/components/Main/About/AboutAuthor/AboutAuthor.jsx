import { AboutHalfBlock, AboutList, AboutSubBlockTitle, AboutSubContainer, AboutSubTitle } from 'pages/About/AboutPage.styled'
import { useEffect, useRef } from 'react'
import svg from '../../../../images/icon-spread.svg'

const AboutAuthor = () => {

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
            <AboutSubBlockTitle ref={((underline) => refs.current.push(underline))}># Author</AboutSubBlockTitle>
            <AboutSubContainer>
                <AboutHalfBlock ref={((halfBlock1) => refs.current.push(halfBlock1))}>
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
                </AboutHalfBlock>

                <AboutHalfBlock ref={((halfBlock2) => refs.current.push(halfBlock2))}>
                    <AboutSubTitle ># Social Links</AboutSubTitle>
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
                </AboutHalfBlock>
            </AboutSubContainer></>
    )
}

export default AboutAuthor