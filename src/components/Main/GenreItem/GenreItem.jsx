import React from 'react'
import { GenreBackground, GenreItemCard } from './GenreItem.styled'

const GenreItem = ({ name, image }) => {
    return (
        <GenreItemCard>
            <GenreBackground src={image} alt="genre__image" width="100%" />
            <h2>{name}</h2>
        </GenreItemCard>
    )
}

export default GenreItem