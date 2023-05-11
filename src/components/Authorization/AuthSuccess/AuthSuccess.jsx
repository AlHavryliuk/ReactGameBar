import Loader from "components/Loader/Loader"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "store/authReducer/authOperations"
import { select } from "store/selectors/selectors"
import svg from '../../../images/icon-spread.svg'
import { CustomAuthLogout, CustomAuthSuccess, CustomAuthWrapper, MiniAvatar, SettingsButton } from "./AuthSuccess.styles"
import { defaultImage } from "utils/helpers/defaultImg"

const AuthSuccess = () => {
    const user = useSelector(select.userData)
    const dispatch = useDispatch()
    const authIsLoading = useSelector(select.authIsLoading)


    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <CustomAuthWrapper>
            {authIsLoading && <Loader />}
            <CustomAuthSuccess>
                <MiniAvatar src={user?.avatarURL || defaultImage} />
                {user.nickname || user.email}
            </CustomAuthSuccess>
            <CustomAuthLogout onClick={handleLogout}>
                <svg height={24} width={24}>
                    <use href={`${svg}#icon-exit`}></use>
                </svg>
            </CustomAuthLogout>
            <SettingsButton to="/profile">
                <svg height={22} width={22}>
                    <use href={`${svg}#icon-cog`}></use>
                </svg>
            </SettingsButton>

        </CustomAuthWrapper>
    )
}

export default AuthSuccess