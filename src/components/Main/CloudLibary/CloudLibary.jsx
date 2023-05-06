import { useDispatch, useSelector } from "react-redux";
import { select } from "store/selectors/selectors";
import { CustomGameCard, CustomNavLink } from "../GameCard/GameCard.styled";
import { useEffect } from "react";
import { getCloudGames } from "store/cloudGamesReducer/cloudGamesOperations";

const CloudLibary = () => {

    const dispatch = useDispatch()
    const cloudGames = useSelector(select.cloudLibaryGames)
    const page = useSelector(select.currentPage)
    const currentPageName = useSelector(select.pageName)

    useEffect(() => {
        if (currentPageName !== 'cloudLibary') return
        dispatch(getCloudGames(page))
    }, [dispatch, page, currentPageName])


    return (
        <>
            {cloudGames.length > 0 &&
                cloudGames.map(({
                    gameID,
                    backdrop,
                    name
                }) => <CustomNavLink key={gameID} to={`/details/${gameID}`}>
                        <CustomGameCard>
                            <img
                                width="100%"
                                src={backdrop}
                                alt={`game_${name}`}
                            />
                            <h3>{name}</h3>
                        </CustomGameCard>
                    </CustomNavLink>)
            }
        </>
    )
}

export default CloudLibary