import GameDetailsPage from 'pages/GameDetails/GameDetailsPage';
import GenresPage from 'pages/Genres/GenresPage';
import HomePage from 'pages/Home/HomePage';
import LibaryPage from 'pages/Libary/LibaryPage';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { select } from 'store/selectors/selectors';
import { ThemeProvider } from 'styled-components';
import { darkThemeVars, lightThemeVars } from 'utils/variables/variables';
import { GlobalStyle } from './Custom/GlobalStyle/GlobalStyle.styled';
import Header from './Header/MainHeader/Header';
import MobileNav from './Header/MobileNav/MobileNav';
import ToasterContainer from './Toaster/ToasterContainer';


export const App = () => {
  const darkMode = useSelector(select.darkMode);
  const mobileNavigation = useSelector(select.mobileNavigation);

  return (
    <ThemeProvider theme={darkMode ? darkThemeVars : lightThemeVars}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:gameId/*" element={<GameDetailsPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/libary" element={<LibaryPage />} />
      </Routes>
      {mobileNavigation && <MobileNav />}
      <ToasterContainer />
    </ThemeProvider>
  );
};
