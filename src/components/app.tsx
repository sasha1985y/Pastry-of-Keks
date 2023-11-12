import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const.ts';
import { useAppSelector } from '../hooks/index.ts';
import AppPrivateRoute from './private-route.tsx';
import Main from '../pages/main/main.tsx';
import Catalog from '../pages/catalog/catalog.tsx';
import ErrorPage from '../pages/error-page/error-page.tsx';
import Favourites from '../pages/favourites/favourites.tsx';
import SignIn from '../pages/sign-in/sign-in.tsx';
import ProductPage from '../pages/product-page/product-page.tsx';
import LoadingScreen from '../pages/loading-screen/loading-screen.tsx';
import RegisterPage from '../pages/sign-up/sign-up.tsx';

function App() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isProductsDataLoading = useAppSelector((state) => state.isProductsDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isProductsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main authorizationStatus={authorizationStatus} />
            }
          />
          <Route
            path={AppRoute.Catalog}
            element={
              <Catalog />
            }
          />
          <Route
            path={AppRoute.SignIn}
            element={
              <SignIn />
            }
          />
          <Route
            path={AppRoute.SignUp}
            element={
              <RegisterPage />
            }
          />
          <Route
            path={AppRoute.Favourites}
            element={
              <AppPrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <Favourites />
              </AppPrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.ProductPage}/:productId`}
            element={
              <ProductPage />
            }
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;
