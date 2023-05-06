import { useDispatch, useSelector } from 'react-redux';
import { decrementPage } from 'store/requestReducer/requestSlice';
import { select } from 'store/selectors/selectors';
import { CustomPrevBtn } from './PreviousPage.styled';

const PreviousPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(select.currentPage);

  const decrementPages = () => {
    dispatch(decrementPage());
  };

  return (
    <CustomPrevBtn disabled={currentPage === 1} onClick={decrementPages}>
      Previous page
    </CustomPrevBtn>
  );
};

export default PreviousPage;
