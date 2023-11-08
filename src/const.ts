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
  SignIn = '/login',
  SignUp = '/sign-up',
  SignOut = '/sign-out',
  Products = '/v0/keks/products',
}

export {
  PRODUCT_COUNT_PER_STEP,
  TIMEOUT_SHOW_ERROR,
  AppRoute,
  AuthorizationStatus,
  APIRoute,
};

