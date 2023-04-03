import LightMode from "components/LightMode/LightMode";
import { useDispatch } from "react-redux";
import { closeMenu } from "store/mobileNav/mobileNavSlice";
import { setFirstPage } from "store/requestReducer/requestSlice";
import icon from '../../../images/icon-spread.svg';
import { MobileCloseButton, MobileHeader, MobileNavItem, MobileNavPopup } from "./MobileNav.styled";

const MobileNav = () => {
    const dispatch = useDispatch()
    const handleCloseNavigationMenu = () => {
        dispatch(closeMenu())
    }

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
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/libary">Libary</MobileNavItem>
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/about">About</MobileNavItem>
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/search">Search</MobileNavItem>
        </MobileNavPopup>
    )
}

export default MobileNav