import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "store/authReducer/authOperations";
import { loginValidator, registerValidator } from "utils/helpers/authValidation";
import { CusomAuthTitle, CustomAuthPopup, CustomAuthPopupBody, CustomAuthPopupContent, CustomPoupHeader, CustomUseForm, PopopClouseBtn } from "./AuthPopup.styles";

const AuthPopup = ({ closePopUp, popupType }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch()



    const onSubmit = credential => {
        switch (popupType) {
            case "login":
                if (!loginValidator(credential)) return
                dispatch(loginUser(credential)).unwrap().then(() => closePopUp(true))
                break
            default:
                if (!registerValidator(credential)) return
                dispatch(registerUser(credential)).unwrap().then(() => closePopUp(true))
                break
        }
        reset();
    };

    const handleAuthPopupClose = () => {
        closePopUp(true)
    }
    return (
        <CustomAuthPopup>
            <CustomAuthPopupBody>
                <CustomAuthPopupContent>
                    <CustomPoupHeader>
                        <PopopClouseBtn onClick={handleAuthPopupClose}>×</PopopClouseBtn>
                    </CustomPoupHeader>
                    <CusomAuthTitle>{popupType}</CusomAuthTitle>
                    <CustomUseForm>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {
                                popupType !== 'login' &&
                                <> <input placeholder="Your Nickname..." {...register("nickname", { required: true })} />
                                    {errors.password && <span>This field is required</span>}
                                </>
                            }
                            <input placeholder="Email..." {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                            <input type="password" placeholder="Password..." {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}
                            <input className="submit-button" type="submit" value={popupType} />
                        </form>
                    </CustomUseForm>
                </CustomAuthPopupContent>
            </CustomAuthPopupBody>
        </CustomAuthPopup>
    )
}

export default AuthPopup