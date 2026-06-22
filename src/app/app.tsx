import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import { Offer } from '../types/offer';
import { AppRoute } from '../const';
//import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


/*
type AppScreenProps = {
  offersCount: number;
}

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount} />
  );
}
*/
type AppProps = {
  offers: Offer[];
};

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage offers={offers} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={<FavoritesPage offers={offers} />} />
        <Route path={AppRoute.Offer} element={<OfferPage offers={offers} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
