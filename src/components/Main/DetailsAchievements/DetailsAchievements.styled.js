import styled from 'styled-components';

export const AchievementsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  padding: 30px 0 10px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 12px; /* ширина всей полосы прокрутки */
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.mainTextColor}; /* цвет зоны отслеживания */
    border-radius: 20px; /* округлось бегунка */
    border: 1px solid;
    border-color: ${({ theme }) => theme.headerBackgroundColor};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.headerBackgroundColor}; /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: none; /* отступ вокруг бегунка */
  }
`;
// background-color: ${({ theme }) => theme.lightModeBackground};
export const AchievementsCard = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 200px; */
  & img {
    height: 200px;
    border-radius: 20px;
    
  }

  & p {
    text-align: center;
    color: ${({ theme }) => theme.mainTextColor};
  }
`;
