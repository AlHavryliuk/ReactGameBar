import React from 'react'
import { DetailsPropertyWrapper, PropertiesSubTitle } from '../DetailsProperties/DetailsProperties.styled'
import { AchievementsCard, AchievementsContainer } from './DetailsAchievements.styled';
import { useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';

const DetailsAchievements = () => {
    const achievements = useSelector(select.achievements)


    return (
        <DetailsPropertyWrapper>
            <PropertiesSubTitle>Popular Achievements</PropertiesSubTitle>
            {achievements && <>
                <AchievementsContainer>
                    {achievements.map(({ id, name, image }) =>
                        <AchievementsCard key={id}>
                            <img src={image} alt={name} />
                            <p>{name}</p>
                        </AchievementsCard>)}
                </AchievementsContainer>
            </>}
        </DetailsPropertyWrapper >
    )
}

export default DetailsAchievements