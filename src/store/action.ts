import {createAction} from '@reduxjs/toolkit';
import { TProducts } from '../types/product-type.ts';
import { AuthorizationStatus } from '../const.ts';

export const showMoreBtntStep = createAction('app/showMoreBtntStep');

export const loadProducts = createAction<TProducts>('data/loadProducts');

//export const loadPromo = createAction<TPromo>('data/loadPromo');

export const setProductsDataLoadingStatus = createAction<boolean>('data/setProductsDataLoadingStatus');

//export const setPromoDataLoadingStatus = createAction<boolean>('data/setPromoDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');
