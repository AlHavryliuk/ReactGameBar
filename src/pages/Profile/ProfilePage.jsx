import ProfileForm from "components/ProfileForm/ProfileForm"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { setCurrentPage } from "store/requestReducer/requestSlice"
import { reselect } from "store/selectors/selectors"
import { ProfileContainer } from "./ProfilePage.styles"

const ProfilePage = () => {
    const dispatch = useDispatch()
    const authComplete = useSelector(reselect.authCompleteSuccess)

    useEffect(() => {
        dispatch(setCurrentPage('profile'))
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {authComplete ?
                <ProfileContainer >
                    < ProfileForm />
                </ProfileContainer>
                : <Navigate to="/" />
            }
        </>

    )
}

export default ProfilePage