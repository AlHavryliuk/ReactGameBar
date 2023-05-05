import AboutPage from 'pages/About/AboutPage';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { token } from 'service/hosts';
import { reselect, select } from 'store/selectors/selectors';
import { ThemeProvider } from 'styled-components';
import { darkThemeVars, lightThemeVars } from 'utils/variables/variables';
import { GlobalStyle } from './Custom/GlobalStyle/GlobalStyle.styled';
import SubHeader from './Custom/SubHeader/SubHeader';
import ToasterContainer from './Custom/Toaster/ToasterContainer';
import Header from './Header/MainHeader/Header';
import MobileNav from './Header/MobileNav/MobileNav';
import Loader from './Loader/Loader';
import { getCurrentUser } from 'store/authReducer/authOperations';



export const App = () => {
  const darkMode = useSelector(select.darkMode);
  const mobileNavigation = useSelector(select.mobileNavigation);
  const LazyHomePage = lazy(() => import('pages/Home/HomePage'))
  const LazyDetailsPage = lazy(() => import('pages/GameDetails/GameDetailsPage'))
  const LazySearchPage = lazy(() => import('pages/Search/SearchPage'))
  const LazyLibaryPage = lazy(() => import('pages/Libary/LibaryPage'))
  const LazyGameByGenresPage = lazy(() => import('pages/GameByGenres/GameByGenresPage'))
  const LazyGenresPage = lazy(() => import('pages/Genres/GenresPage'))
  const LazyCloudLibaryPage = lazy(() => import('pages/CloudLibary/CloudLibary'))
  const authComplete = useSelector(reselect.authCompleteSuccess)
  const user = useSelector(select.userData)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!authComplete) return;
    else {
      token.set(user.token)
      dispatch(getCurrentUser())
    }
  }, [authComplete, user?.token, dispatch])

  console.log(process.env.REACT_APP_MY_API_KEY);
  // console.log(process.env);
  console.log(process.env.REACT_APP_VORTEX_URL);

  return (
    <ThemeProvider theme={darkMode ? darkThemeVars : lightThemeVars}>
      <GlobalStyle />
      <Header />
      <SubHeader />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/details/:gameId/*" element={<LazyDetailsPage />} />
          <Route path="/search" element={<LazySearchPage />} />
          <Route path="/genres" element={<LazyGenresPage />} />
          <Route path="/genres/:genre/*" element={<LazyGameByGenresPage />} />
          <Route path="/libary" element={<LazyLibaryPage />} />
          <Route path="/cloudLibary" element={<LazyCloudLibaryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
      {mobileNavigation && <MobileNav />}
      <ToasterContainer />
    </ThemeProvider>
  );
};
