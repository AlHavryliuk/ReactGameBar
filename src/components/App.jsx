import HomePage from 'pages/Home/HomePage';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { select } from 'store/selectors/selectors';
import { ThemeProvider } from 'styled-components';
import { darkThemeVars, lightThemeVars } from 'utils/variables/variables';
import { GlobalStyle } from './Custom/GlobalStyle/GlobalStyle.styled';
import Header from './Header/MainHeader/Header';
import MobileNav from './Header/MobileNav/MobileNav';
import Loader from './Loader/Loader';
import ToasterContainer from './Toaster/ToasterContainer';


export const App = () => {
  const darkMode = useSelector(select.darkMode);
  const mobileNavigation = useSelector(select.mobileNavigation);
  const LazyDetailsPage = lazy(() => import('pages/GameDetails/GameDetailsPage'))
  const LazySearchPage = lazy(() => import('pages/Search/SearchPage'))
  const LazyLibaryPage = lazy(() => import('pages/Libary/LibaryPage'))
  const LazyGameByGenresPage = lazy(() => import('pages/GameByGenres/GameByGenresPage'))
  const LazyGenresPage = lazy(() => import('pages/Genres/GenresPage'))

  return (
    <ThemeProvider theme={darkMode ? darkThemeVars : lightThemeVars}>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:gameId/*" element={<LazyDetailsPage />} />
          <Route path="/search" element={<LazySearchPage />} />
          <Route path="/genres" element={<LazyGenresPage />} />
          <Route path="/genres/:genre/*" element={<LazyGameByGenresPage />} />
          <Route path="/libary" element={<LazyLibaryPage />} />
        </Routes>
      </Suspense>
      {mobileNavigation && <MobileNav />}
      <ToasterContainer />
    </ThemeProvider>
  );
};
