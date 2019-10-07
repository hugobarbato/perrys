import { Action } from '@ngrx/store';
// Declara instacia das funções que faram a ligação do dispatch da store com o reducers
export enum CartActionTypes {
    // Remove = 'REM',
    Add = 'ADD',
    Clear = 'CLE',
    Decrement = 'DEC'
}

export const Add = (product: any) => {
    return <Action>{ type: CartActionTypes.Add, payload: product };
}

export const Clear = () => {
    return <Action>{ type: CartActionTypes.Clear, payload: null };
} 

export const Decrement = (product: any) => {
    return <Action>{ type: CartActionTypes.Decrement, payload: product };
} 
// export const Remove = (product: any) => {
//     return <Action>{ type: CartActionTypes.Remove, payload: product };
// }