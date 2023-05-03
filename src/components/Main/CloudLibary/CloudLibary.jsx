import { useDispatch, useSelector } from "react-redux";
import { select } from "store/selectors/selectors";
import { CustomGameCard, CustomNavLink } from "../GameCard/GameCard.styled";
import { useEffect } from "react";
import { getCloudGames } from "store/cloudGamesReducer/cloudGamesOperations";

const CloudLibary = () => {

    const cloudGames = useSelector(select.cloudGames)
    const dispatch = useDispatch()
    const page = useSelector(select.page)
    const currentPage = useSelector(select.currentPage)

    useEffect(() => {
        if (currentPage !== 'cloudLibary') return
        dispatch(getCloudGames(page))
    }, [dispatch, page, currentPage])


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