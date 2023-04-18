import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from 'store/requestReducer/requestSlice';
import { CustomNextButton } from './NextPage.styled';
import { select } from 'store/selectors/selectors';

const NextPage = () => {
  const dispatch = useDispatch();
  const lastPage = useSelector(select.lastPage)
  const currentPage = useSelector(select.page)

  const incrementPages = () => {
    dispatch(incrementPage());
  };

  return <CustomNextButton disabled={currentPage + 1 === lastPage} onClick={incrementPages}>NextPage</CustomNextButton>;
};

export default NextPage;
