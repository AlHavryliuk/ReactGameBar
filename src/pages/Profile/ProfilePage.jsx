import ProfileForm from "components/ProfileForm/ProfileForm"
import { ProfileContainer } from "./ProfilePage.styles"
import { setCurrentPage } from "store/requestReducer/requestSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const ProfilePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('profile'))
        // eslint-disable-next-line
    }, [])

    return (
        <ProfileContainer>
            <ProfileForm />
        </ProfileContainer>
    )
}

export default ProfilePage