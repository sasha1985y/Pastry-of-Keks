import {createReducer} from '@reduxjs/toolkit';
import { /*showMoreBtntStep,*/ loadProducts, /*loadPromo,*/ requireAuthorization, setError, setProductsDataLoadingStatus } from './action.ts';
import { TProducts } from '../types/product-type.ts';
import { /*FILM_COUNT_PER_STEP,*/ AuthorizationStatus } from '../const.ts';

//const STEP_COUNT = FILM_COUNT_PER_STEP;

type InitialState = {
  //step: FILM_COUNT_PER_STEP;
  products: TProducts;
  //promo: TPromo;
  authorizationStatus: AuthorizationStatus;
  isProductsDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  //step: FILM_COUNT_PER_STEP,
  products: [],
  /*promo: {
    id: '',
    name: '',
    posterImage: '',
    backgroundImage: '',
    videoLink: '',
    genre: '',
    released: 0,
    isFavorite: false
  },*/
  authorizationStatus: AuthorizationStatus.Unknown,
  isProductsDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts, (state, action) => {
      state.products = action.payload;
    })
    /*.addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })*/
    .addCase(setProductsDataLoadingStatus, (state, action) => {
      state.isProductsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

