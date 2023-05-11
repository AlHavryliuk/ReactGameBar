import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { patchCurrentUserThunk, patchUserAvatarThunk } from "store/authReducer/authOperations";
import { select } from "store/selectors/selectors";
import swal from "sweetalert";
import { ChangeButton, InputSubTitle, InputWrapper, ProfileButtons, ProfileDataArea, ProfileFormWrapper, ProfileImage, ProfileTitle, SaveButton } from "./ProfileForm.styles";
import { defaultImage } from "utils/helpers/defaultImg";

const ProfileForm = () => {
    const { register, handleSubmit, } = useForm();
    const { email, nickname = '' } = useSelector(select.userData)
    const user = useSelector(select.userData)
    const [creativeMode, setCreativeMode] = useState(false)
    const dispatch = useDispatch()
    const avatarUser = user?.avatarURL ?? defaultImage

    const handleChangeMode = (event) => {
        event.preventDefault()
        setCreativeMode(!creativeMode)
    }

    const onSubmit = (newData) => {
        const { nickname: newName, avatar } = newData
        let changeCount = 0;
        if (avatar.length !== 0) {
            const formData = new FormData();
            formData.append('avatar', avatar[0]);
            dispatch(patchUserAvatarThunk(formData))
            changeCount++;
        }
        if (nickname !== newName) {
            dispatch(patchCurrentUserThunk({ nickname: newName })).unwrap().then(() => setCreativeMode(!creativeMode))
            changeCount++;
        }
        if (changeCount === 0) {
            swal({ title: "There are no changes" })
        }

    }

    return (
        <ProfileFormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ProfileTitle>Personal Area</ProfileTitle>
                <ProfileDataArea>
                    <ProfileImage src={avatarUser} />

                    <InputWrapper>
                        <InputSubTitle>Photo:</InputSubTitle>
                        <input type="file" {...register('avatar')} />
                    </InputWrapper>

                    <InputWrapper>
                        <InputSubTitle>Nickname:</InputSubTitle>
                        <input defaultValue={nickname} {...register("nickname")} readOnly={!creativeMode} />
                    </InputWrapper>

                    <InputWrapper>
                        <InputSubTitle>Email: </InputSubTitle>
                        <input defaultValue={email} {...register("email")} readOnly={true} />
                    </InputWrapper>

                    <ProfileButtons>
                        <ChangeButton onClick={handleChangeMode}>{creativeMode ? "Break" : "Edit text field"}</ChangeButton>
                        <SaveButton className="submit-button" type="submit" value={'Save'} />
                    </ProfileButtons>

                </ProfileDataArea>


            </form></ProfileFormWrapper>
    )
}

export default ProfileForm