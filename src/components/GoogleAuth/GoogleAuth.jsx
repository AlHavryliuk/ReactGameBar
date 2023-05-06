import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { googleLoginUser } from 'store/authReducer/authOperations';


const GoogleAuth = () => {
    const dispatch = useDispatch()

    return (

        <GoogleLogin
            onSuccess={credentialResponse => {
                const { credential } = credentialResponse
                dispatch(googleLoginUser(credential))
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />

    );
};

export default GoogleAuth;
