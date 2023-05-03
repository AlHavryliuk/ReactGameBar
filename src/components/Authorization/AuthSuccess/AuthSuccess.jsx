import { CustomAuthSuccess, CustomAuthWrapper, CustomAuthLogout } from "./AuthSuccess.styles"
import svg from '../../../images/icon-spread.svg'
import { useDispatch, useSelector } from "react-redux"
import { select } from "store/selectors/selectors"
import { logoutUser } from "store/authReducer/authOperations"
import Loader from "components/Loader/Loader"

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
            <CustomAuthSuccess>{user.nickname || user.email}</CustomAuthSuccess>
            <CustomAuthLogout onClick={handleLogout}>
                <svg height={24} width={24}>
                    <use href={`${svg}#icon-exit`}></use>
                </svg>
            </CustomAuthLogout>
        </CustomAuthWrapper>
    )
}

export default AuthSuccess