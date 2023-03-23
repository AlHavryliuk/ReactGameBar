import { MobileCloseButton, MobileHeader, MobileNavItem, MobileNavPopup } from "./MobileNav.styled"
import icon from '../../../images/icon-spread.svg';
import { useDispatch } from "react-redux";
import { closeMenu } from "store/mobileNav/mobileNavSlice";
import LightMode from "components/LightMode/LightMode";

const MobileNav = () => {
    const dispatch = useDispatch()
    const handleCloseNavigationMenu = () => {
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

            <MobileNavItem onClick={handleCloseNavigationMenu} to="/">Home</MobileNavItem>
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/genres">Genres</MobileNavItem>
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/libary">Libary</MobileNavItem>
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/about">About</MobileNavItem>
            <MobileNavItem onClick={handleCloseNavigationMenu} to="/contact">Contact</MobileNavItem>
        </MobileNavPopup>
    )
}

export default MobileNav