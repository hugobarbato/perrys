import { 
  ActionReducerMap, 
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment'; 
import { storeReducer } from './store.reducer';

export interface State { } 
// Declara reducers para importação no AppModule
export const reducers: ActionReducerMap<State> = {
  store: storeReducer
};
// Declara configuração do reducers
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
