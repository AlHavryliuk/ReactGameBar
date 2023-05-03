import { openMenu } from 'store/mobileNav/mobileNavSlice';
import icon from '../../../images/icon-spread.svg';
import { BurgerMenu } from '../Navigation/Navigation.styled';
import { useDispatch } from 'react-redux';

const Burger = () => {
    const dispatch = useDispatch()
    const handleOpenNavigationMenu = () => {
        dispatch(openMenu())
    }

    return (
        <BurgerMenu onClick={handleOpenNavigationMenu}>
            <use href={`${icon}#icon-paragraph`}></use>
        </BurgerMenu>
    )
}

export default Burger