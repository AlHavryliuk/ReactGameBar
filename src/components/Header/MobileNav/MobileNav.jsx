import LightMode from "components/LightMode/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "store/mobileNav/mobileNavSlice";
import { setFirstPage } from "store/requestReducer/requestSlice";
import { reselect, select } from "store/selectors/selectors";
import icon from '../../../images/icon-spread.svg';
import { MobileCloseButton, MobileHeader, MobileNavItem, MobileNavPopup } from "./MobileNav.styled";

const MobileNav = () => {
    const dispatch = useDispatch()
    const handleCloseNavigationMenu = () => {
        dispatch(closeMenu())
    }
    const user = useSelector(select.userData)
    const userRole = user?.role ?? 'user'
    const authComplete = useSelector(reselect.authCompleteSuccess)
    const handleCloseAndSetFirstPage = () => {
        dispatch(setFirstPage())
        dispatch(closeMenu())
    }


    return (
        <MobileNavPopup>
            <MobileHeader >
                <LightMode />
                <MobileCloseButton onClick={handleCloseNavigationMenu}>
                    <use href={`${icon}#icon-cross`}></use>
                </MobileCloseButton>
            </MobileHeader>
            <MobileNavItem onClick={handleCloseAndSetFirstPage} to="/">Home</MobileNavItem>
            <MobileNavItem onClick={handleCloseAndSetFirstPage} to="/genres">Genres</MobileNavItem>
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/libary">Locale Libary</MobileNavItem>
            {authComplete && <MobileNavItem onClick={handleCloseAndSetFirstPage} to="/cloudLibary">Cloud Libary</MobileNavItem>}
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/about">About</MobileNavItem>
            {userRole === 'admin' && <MobileNavItem onClick={handleCloseNavigationMenu} to="/adminPanel">Admin Panel</MobileNavItem>}
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/search">Search</MobileNavItem>
        </MobileNavPopup>
    )
}

export default MobileNav