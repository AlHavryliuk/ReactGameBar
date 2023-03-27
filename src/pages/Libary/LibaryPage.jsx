import React from 'react'

import Libary from 'components/Main/Libary/Libary';
import GameGallery from 'components/Custom/GameGallery/GameGallery';
import { SectionTitle } from 'components/Custom/GameGallery/GameGallery.styled';

const LibaryPage = () => {
    return (
        <GameGallery>
            <SectionTitle>Libary</SectionTitle>
            <Libary />
        </GameGallery>


    )
}

export default LibaryPage