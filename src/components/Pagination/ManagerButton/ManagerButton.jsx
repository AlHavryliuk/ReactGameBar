import { useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import NextPage from '../NextPage/NextPage';
import PreviousPage from '../PreviousPage/PreviousPage';
import { LibaryWarningTitle } from './../../Main/Libary/Libary.styled';
import { PaginationWrapper } from './ManagerButton.styled';

const ManagerButton = () => {

  const games = useSelector(select.gamesList)

  return (
    <>
      {games && games.length ? <PaginationWrapper>
        < PreviousPage />
        <NextPage />
      </PaginationWrapper > : <LibaryWarningTitle>Game list is empty... Specify parameters for the query...</LibaryWarningTitle>}
    </>
  );
};

export default ManagerButton;
