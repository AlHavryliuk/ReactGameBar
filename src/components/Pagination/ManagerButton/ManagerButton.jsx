import { useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import NextPage from '../NextPage/NextPage';
import PreviousPage from '../PreviousPage/PreviousPage';
import { LibaryWarningTitle } from './../../Main/Libary/Libary.styled';
import { PaginationWrapper } from './ManagerButton.styled';

const ManagerButton = () => {

  const games = useSelector(select.gamesList)
  const cloudGames = useSelector(select.cloudLibaryGames)
  const currentPageName = useSelector(select.pageName)

  const tempGames = currentPageName === "cloudLibary" ? cloudGames : games

  return (
    <>
      {tempGames && tempGames.length ? <PaginationWrapper>
        < PreviousPage />
        <NextPage />
      </PaginationWrapper > : <LibaryWarningTitle>Game list is empty... </LibaryWarningTitle>}
    </>
  );
};

export default ManagerButton;
