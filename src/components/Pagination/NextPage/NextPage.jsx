import { useDispatch } from 'react-redux';
import { incrementPage } from 'store/requestReducer/requestSlice';
import { CustomNextButton } from './NextPage.styled';

const NextPage = () => {
  const dispatch = useDispatch();

  const incrementPages = () => {
    dispatch(incrementPage());
  };

  return <CustomNextButton onClick={incrementPages}>NextPage</CustomNextButton>;
};

export default NextPage;
