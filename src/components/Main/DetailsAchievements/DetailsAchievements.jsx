import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';
import { clearAchievements } from 'store/selectGameReducer/selectGameSlice';
import { select } from 'store/selectors/selectors';
import { DetailsPropertyWrapper, PropertiesSubTitle } from '../DetailsProperties/DetailsProperties.styled';
import { AchievementsCard, AchievementsContainer } from './DetailsAchievements.styled';

const DetailsAchievements = () => {
    const achievements = useSelector(select.achievements)
    const notFoundImage = 'https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1620'
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(clearAchievements())
        }
    }, [dispatch])



    return (
        <DetailsPropertyWrapper>
            <PropertiesSubTitle>Popular Achievements</PropertiesSubTitle>
            {achievements ?
                <AchievementsContainer>
                    {achievements.map(({ id, name, image }) =>
                        <AchievementsCard key={id}>
                            <img src={image ?? notFoundImage} alt={name} />
                            <p>{name}</p>
                        </AchievementsCard>
                    )}
                </AchievementsContainer> : <HashLoader color="#36d7b7" />}
        </DetailsPropertyWrapper >
    )
}

export default DetailsAchievements