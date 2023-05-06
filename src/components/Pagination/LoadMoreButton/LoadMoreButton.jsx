import { useDispatch, useSelector } from 'react-redux';
import { LoadMoreContainer, LocalPage } from './LoadMoreButton.styled';
import { decrementLocalPage, incrementLocalPage, setFirstLocalPage } from 'store/favoriteGames/favoriteSlice';
import { select } from 'store/selectors/selectors';
import { useEffect } from 'react';

const LoadMoreButton = () => {
  const dispatch = useDispatch()
  const favoriteGames = useSelector(select.localLibaryGames)
  const per_page = useSelector(select.per_page)
  const page = useSelector(select.localCurrentPage)
  const currentPageName = useSelector(select.pageName)


  useEffect(() => {
    if (currentPageName === 'details') return
    dispatch(setFirstLocalPage())
    // eslint-disable-next-line
  }, [dispatch])


  const handleLimitPage = () => {
    const maxPages = Math.ceil(favoriteGames.length / per_page);
    return page < maxPages;
  }

  const handleIncrementLocalPage = () => {
    dispatch(incrementLocalPage())
  }


  const handleDecrementLocalPage = () => {
    dispatch(decrementLocalPage())
  }



  return (
    <LoadMoreContainer>
      {favoriteGames.length > per_page &&
        <>
          {page > 1 && <LocalPage onClick={handleDecrementLocalPage}>Previous page</LocalPage>}
          {handleLimitPage() && <LocalPage onClick={handleIncrementLocalPage}>Next page</LocalPage>}

        </>
      }

    </LoadMoreContainer>
  );
};

export default LoadMoreButton;
