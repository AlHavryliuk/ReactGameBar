import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from 'store/requestReducer/requestSlice';
import { CustomNextButton } from './NextPage.styled';
import { select } from 'store/selectors/selectors';

const NextPage = () => {
  const dispatch = useDispatch();
  const lastPage = useSelector(select.lastPage)
  const currentPage = useSelector(select.currentPage)
  const currentPageName = useSelector(select.pageName)
  const cloudTotalPages = useSelector(select.totalCloudPages)

  const incrementPages = () => {
    dispatch(incrementPage());
  };

  const checkLastPage = () => {
    switch (currentPageName) {
      case 'cloudLibary':
        if (currentPage < cloudTotalPages) return false;
        return true
      default:
        if (currentPage < lastPage) return false;
        return true;
    }
  }

  return <CustomNextButton disabled={checkLastPage()} onClick={incrementPages}>NextPage</CustomNextButton>;
};

export default NextPage;
