import { failureToast } from 'components/Custom/Toaster/toasts';
import { loginUser, registerUser } from 'store/authReducer/authOperations';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const authValidator = (action, credentials) => {
  switch (action) {
    case loginUser:
      return loginValidator(credentials);
    case registerUser:
      return registerValidator(credentials);
    default:
      console.log('Unexpected action');
      return false;
  }
};

export const registerValidator = credentials => {
  const { email, nickname, password } = credentials;

  if (!emailRegex.test(email)) {
    failureToast(
      'Invalid email format! Please try again (Example: ivanov@gmail.com)'
    );
    return false;
  }

  if (nickname.length < 2) {
    failureToast('Nickname must be at least 2 characters');
    return false;
  }

  if (password.length < 6) {
    failureToast('Password length must be at least 6! Please try again!');
    return false;
  }

  return {
    isValid: true,
  };
};

export const loginValidator = credentials => {
  const { email, password } = credentials;

  if (!emailRegex.test(email)) {
    failureToast(
      'Invalid email format! Please try again (Example: ivanov@gmail.com)'
    );
    return false;
  }

  if (password.length < 6) {
    failureToast('Password length must be at least 6! Please try again!');
    return false;
  }

  return {
    isValid: true,
  };
};
