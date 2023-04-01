import React from 'react'
import { AboutContainerStyled } from './AboutContainer.styled';


const AboutContainer = ({ children }) => {
    return (
        <AboutContainerStyled>{children}</AboutContainerStyled>
    )
}

export default AboutContainer