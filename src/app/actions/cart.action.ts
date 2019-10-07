import { Action } from '@ngrx/store';

export enum CartActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
    Decrement = 'DEC'
}

export const Add = (product: any) => {
    return <Action>{ type: CartActionTypes.Add, payload: product };
}

export const Remove = (product: any) => {
    return <Action>{ type: CartActionTypes.Remove, payload: product };
}

export const Clear = () => {
    return <Action>{ type: CartActionTypes.Clear, payload: null };
} 

export const Decrement = (product: any) => {
    return <Action>{ type: CartActionTypes.Decrement, payload: product };
} 