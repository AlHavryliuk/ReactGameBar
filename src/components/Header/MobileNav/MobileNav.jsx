import { MobileCloseButton, MobileNavItem, MobileNavPopup } from "./MobileNav.styled"
import icon from '../../../images/icon-spread.svg';
import { useDispatch } from "react-redux";
import { closeMenu } from "store/mobileNav/mobileNavSlice";

const MobileNav = () => {
    const dispatch = useDispatch()
    const handleCloseNavigationMenu = () => {
        dispatch(closeMenu())
    }


    return (
        <MobileNavPopup>
            <MobileCloseButton onClick={handleCloseNavigationMenu}>
                <use href={`${icon}#icon-cross`}></use>
            </MobileCloseButton>
            <MobileNavItem to="/genres">Genres</MobileNavItem>
            <MobileNavItem to="/libary">Libary</MobileNavItem>
            <MobileNavItem to="/about">About</MobileNavItem>
            <MobileNavItem to="/contact">Contact</MobileNavItem>
        </MobileNavPopup>
    )
}

export default MobileNav