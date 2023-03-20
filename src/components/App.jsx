import { ThemeProvider } from 'styled-components';
import Header from './Header/MainHeader/Header';
import { useSelector } from 'react-redux';
import { select } from 'store/selectors/selectors';
import { darkThemeVars, lightThemeVars } from 'utils/variables/variables';
import { GlobalStyle } from './Custom/GlobalStyle/GlobalStyle.styled';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import GameDetailsPage from 'pages/GameDetails/GameDetailsPage';
import GenresPage from 'pages/Genres/GenresPage';
import MobileNav from './Header/MobileNav/MobileNav';

export const App = () => {
  const darkMode = useSelector(select.darkMode);
  const mobileNavigation = useSelector(select.mobileNavigation);

  return (
    <ThemeProvider theme={darkMode ? darkThemeVars : lightThemeVars}>
      <GlobalStyle />
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:gameId/*" element={<GameDetailsPage />} />
        <Route path="/genres" element={<GenresPage />} />
      </Routes>
      {mobileNavigation && <MobileNav />}
    </ThemeProvider>
  );
};
