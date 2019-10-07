import { Action } from '@ngrx/store';
// Declara instacia das funções que faram a ligação do dispatch da store com o reducers
export enum StoreActionTypes {
    Init = 'INI',
    InitLocal = "INILOCAL"
}

export const Init = ( products: Array<any> ) => {
    return <Action>{ type: StoreActionTypes.Init, payload: products };
}
export const InitLocal = ( store: any ) => {
    return <Action>{ type: StoreActionTypes.InitLocal, payload: store };
}