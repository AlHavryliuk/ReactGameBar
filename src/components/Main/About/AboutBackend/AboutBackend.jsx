import { AboutLinks, AboutSubBlockTitle, AboutTextBackend } from 'pages/About/AboutPage.styled'
import { useEffect, useRef } from 'react'

const AboutBackend = () => {

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
        <><AboutSubBlockTitle ref={((underLine) => refs.current.push(underLine))}># Backend</AboutSubBlockTitle>
            <AboutTextBackend ref={((textBlock) => refs.current.push(textBlock))} >The project uses its own backend. <br /><br />
                The backend supports the ability to authorize and register.
                It is also possible to save games to the cloud library. MongoDB is used as the database. <br /><br />
                You can see the backend code by clicking on the
                <AboutLinks href="https://github.com/AlekasndrHavryliuk/VortexBackend">link</AboutLinks>.
            </AboutTextBackend>
        </>
    )
}

export default AboutBackend