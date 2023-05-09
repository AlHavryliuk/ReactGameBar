import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { patchCurrentUserThunk } from "store/authReducer/authOperations";
import { select } from "store/selectors/selectors";
import swal from "sweetalert";
import { ChangeButton, InputSubTitle, InputWrapper, ProfileButtons, ProfileDataArea, ProfileFormWrapper, ProfileSubBlock, ProfileTitle, SaveButton } from "./ProfileForm.styles";

const ProfileForm = () => {
    const { register, handleSubmit, } = useForm();
    const { email, nickname = '' } = useSelector(select.userData)
    const [creativeMode, setCreativeMode] = useState(false)
    const dispatch = useDispatch()

    const handleChangeMode = (event) => {
        event.preventDefault()
        setCreativeMode(!creativeMode)
    }

    const onSubmit = (newData) => {
        const { nickname: newName } = newData
        if (nickname === newName) {
            swal({ title: "Nickname is not changed" })
            return
        }
        dispatch(patchCurrentUserThunk({ nickname: newName })).unwrap().then(() => setCreativeMode(!creativeMode))
    }

    return (
        <ProfileFormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ProfileTitle>Personal Area</ProfileTitle>
                <ProfileDataArea>
                    <ProfileSubBlock>
                        <InputWrapper>
                            <InputSubTitle>Nickname:</InputSubTitle>
                            <input defaultValue={nickname} {...register("nickname")} readOnly={!creativeMode} />
                        </InputWrapper>
                    </ProfileSubBlock>
                    <ProfileSubBlock>
                        <InputWrapper>
                            <InputSubTitle>Email: </InputSubTitle>
                            <input defaultValue={email} {...register("email")} readOnly={true} />
                        </InputWrapper>
                    </ProfileSubBlock>
                    <ProfileButtons>
                        <ChangeButton onClick={handleChangeMode}>{creativeMode ? "Break" : "Edit"}</ChangeButton>
                        <SaveButton className="submit-button" type="submit" value={'Save'} />
                    </ProfileButtons>
                </ProfileDataArea>


            </form></ProfileFormWrapper>
    )
}

export default ProfileForm