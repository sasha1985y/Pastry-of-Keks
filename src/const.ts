const PRODUCT_COUNT_PER_STEP = 6;

const TIMEOUT_SHOW_ERROR = 2000;

enum AppRoute {
  Catalog = '/catalog',
  Main = '/',
  SignIn = '/login',
  SignUp = '/sign-up',
  Favourites = '/favourites',
  ErrorPage = '/error-page',
  ProductPage = '/product-page',
  NotFound = '/not-found'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  SignIn = '/v0/keks/users/login',
  SignUp = '/sign-up',
  SignOut = '/sign-out',
  Products = '/v0/keks/products',
}

const POINTS = [
  { name: 'Кондитерская 1', latitude: 59.970969, longitude: 30.316252},
  { name: 'Кондитерская 2', latitude: 59.967947, longitude: 30.274708},
  { name: 'Производство', latitude: 59.960380, longitude: 30.308725}
];

export {
  PRODUCT_COUNT_PER_STEP,
  TIMEOUT_SHOW_ERROR,
  AppRoute,
  AuthorizationStatus,
  APIRoute,
  POINTS
};

