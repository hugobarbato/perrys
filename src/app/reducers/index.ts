import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { StoreModel } from '../models/store.model';
import { CartModel } from '../models/cart.model';
 
import { storeReducer } from './store.reducer';

export interface State { } 

export const reducers: ActionReducerMap<State> = {
  store: storeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
