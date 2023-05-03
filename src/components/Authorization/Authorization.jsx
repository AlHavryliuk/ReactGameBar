import AuthPopup from "components/Authorization/AuthPopup/AuthPopup"
import { useState } from "react"
import { AuthorizationWrapper, LoginBtn, SignUpWrapper } from "./Authorization.styles"
import { useSelector } from "react-redux"
import { reselect, select } from "store/selectors/selectors"
import AuthSuccess from "./AuthSuccess/AuthSuccess"
import Loader from "components/Loader/Loader"

const Authorization = ({ headerAuth }) => {
    const [authPopUpIsOpen, setAuthPopUpIsOpen] = useState(false)
    const [popupType, setPopupType] = useState(null)
    const authComplete = useSelector(reselect.authCompleteSuccess)
    const isLoading = useSelector(select.authIsLoading)

    const handleOpenAuthPopup = (type) => {
        switch (type) {
            case ("login"):
                setPopupType('login')
                setAuthPopUpIsOpen(true)
                break
            case ('sign up'):
                setPopupType('sign up')
                setAuthPopUpIsOpen(true)
                break
            default: return false
        }
    }

    return (
        <AuthorizationWrapper className={headerAuth ? 'headerAuth' : 'subHeaderAuth'}>
            {authComplete ? <AuthSuccess />
                :
                <>
                    {isLoading && <Loader />}
                    <LoginBtn onClick={() => handleOpenAuthPopup('login')}>Login</LoginBtn>
                    <SignUpWrapper onClick={() => handleOpenAuthPopup('sign up')}>Sign Up</SignUpWrapper>
                    {authPopUpIsOpen && <AuthPopup closePopUp={() => setAuthPopUpIsOpen()} popupType={popupType} />}
                </>
            }
        </AuthorizationWrapper>
    )
}

export default Authorization