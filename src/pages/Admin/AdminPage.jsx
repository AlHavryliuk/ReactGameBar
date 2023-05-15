import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { token } from "service/hosts"
import { getUsersThunk } from "store/authReducer/authOperations"
import { reselect, select } from "store/selectors/selectors"
import { defaultImage } from "utils/helpers/defaultImg"
import { AdminContainer, AdminTitle, StyledAvatarImage, StyledTable, StyledTableCell, StyledTableHeader, StyledTableRow, StyledTableWrapper } from "./AdminPage.styles"

export const AdminPage = () => {
    const user = useSelector(select.userData)
    const userRole = user?.role ?? "user"
    const userList = user?.userList ?? []
    const dispatch = useDispatch()
    const authComlete = useSelector(reselect.authCompleteSuccess)


    useEffect(() => {

        if (userRole === "admin" && authComlete && token.get()) {
            dispatch(getUsersThunk(1))
        }
    }, [userRole, dispatch, authComlete])


    return (
        <>
            {userRole === 'user' ? <Navigate to="/" /> : <AdminContainer>
                <AdminTitle>All Users</AdminTitle>

                <StyledTableWrapper>
                    <StyledTable>
                        <thead>
                            <tr>
                                <StyledTableHeader>Avatar</StyledTableHeader>
                                <StyledTableHeader>Nickname</StyledTableHeader>
                                <StyledTableHeader>Email</StyledTableHeader>
                                <StyledTableHeader>Role</StyledTableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map(({ email, nickname, role, avatarURL }) => (
                                <StyledTableRow key={email}>
                                    <StyledTableCell>
                                        <StyledAvatarImage src={avatarURL ?? defaultImage} alt="avatar" />
                                    </StyledTableCell>
                                    <StyledTableCell>{nickname}</StyledTableCell>
                                    <StyledTableCell>{email}</StyledTableCell>
                                    <StyledTableCell>{role}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </tbody>
                    </StyledTable>
                </StyledTableWrapper>
            </AdminContainer>}
        </>

    )
}
