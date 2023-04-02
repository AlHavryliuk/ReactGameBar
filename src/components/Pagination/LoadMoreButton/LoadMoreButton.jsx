import { useDispatch, useSelector } from 'react-redux';
import { LoadMoreContainer, LocalPage } from './LoadMoreButton.styled';
import { decrementLocalPage, incrementLocalPage, setFirstLocalPage } from 'store/favoriteGames/favoriteSlice';
import { select } from 'store/selectors/selectors';
import { useEffect } from 'react';

const LoadMoreButton = () => {
  const dispatch = useDispatch()
  const favoriteGames = useSelector(select.favoriteGames)
  const per_page = useSelector(select.per_page)
  const page = useSelector(select.localPage)
  const currentPage = useSelector(select.currentPage)


  useEffect(() => {
    if (currentPage === 'details') return
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
