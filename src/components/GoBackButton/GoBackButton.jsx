import React from 'react'
import { BackIcon, GoBackWrapper } from './GoBackButton.styled';

const GoBackButton = () => {

    const handleGoBack = () => window.history.back();

    return (
        <GoBackWrapper>
            <BackIcon onClick={handleGoBack}>←</BackIcon>
        </GoBackWrapper>
    )
}

export default GoBackButton