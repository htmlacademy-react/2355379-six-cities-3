import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import PrivateRoute from '../components/private-route/private-route';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites/favorites-page';
import PageNotFound from '../pages/page-not-found/page-not-found';
import { AppRoute, AuthorizationStatus } from '../const';

type AppScreenProps = {
  offersCount: number;
}

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage offersCount={offersCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
