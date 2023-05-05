import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const AchievementsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  padding: 30px 0 20px;
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
    background-color: ${({ theme }) => theme.scrollColor}; /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: none; /* отступ вокруг бегунка */
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainTextColor};
  }
`;

export const AchievementsCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.achievementsCardColor};
  /* width: 200px; */
  transition: all 0.3s;

  & img {
    height: 200px;
    border-radius: 20px 20px 0 0;
  }

  & p {
    text-align: center;
    color: ${({ theme }) => theme.mainTextColor};
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    scale: 1.05;

    ${mobile`
      scale: 1;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  `}
  }
`;
