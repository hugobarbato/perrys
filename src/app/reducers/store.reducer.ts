import { StoreActionTypes } from '../actions/store.action';
import { ActionModel } from '../models/action.model'; 
import { StoreModel } from '../models/store.model'; 
import { CartActionTypes } from '../actions/cart.action';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

export var store = new StoreModel();

export function storeReducer(state = store, action: ActionModel) {
    switch (action.type) {
        case StoreActionTypes.Init:
            {  
                state.products = action.payload;
                
                return saveState(state);
            };
        case StoreActionTypes.InitLocal:
            {  
                state = action.payload;
                
                return saveState(state);
            };
        case CartActionTypes.Add:
                {    
                    let idx = indexOf( state.products, action.payload ); 
                    console.info(idx, state.products, action.payload );
                    if(state.products[idx].quantity>0){
                        let cartModel, stateCart;
                        stateCart = state.cart.filter(item=>{
                            if(item.product.id == action.payload.id){
                                return item;
                            }
                        });
                        if(stateCart.length==1){ 
                            let index = state.cart.indexOf(stateCart[0]);
                            state.cart[index].quantity++;
                        }else{
                            cartModel = new CartModel();
                            cartModel.product = action.payload;
                            cartModel.quantity=1;
                            state.cart.push(cartModel);
                        }
                        state.products[idx].quantity--;
                    }

                    state.cartLength = getCartLength(state.cart);

                    console.log(state);
                    return saveState(state);
                };

            case CartActionTypes.Remove:
                {
                    let stateCart;
                    stateCart = state.cart.filter(item=>{
                        if(item.product == action.payload){
                            return item;
                        }
                    });
                    if(stateCart.length==1){
                        let index = state.cart.indexOf(stateCart[0]);
                        state.cart.splice(index, 1);
                        let idx = indexOf(state.products, action.payload);
                        state.products[idx].quantity++;
                    }

                    state.cartLength = getCartLength(state.cart);

                    console.log(state);
                    return saveState(state);
                };

            case CartActionTypes.Clear:
                {
                    console.info('teste');
                    state.cart.forEach(c=>{
                        let idx = indexOf(state.products, c.product);
                        state.products[idx].quantity+=c.quantity;
                    })
                    state.cart = [];
                    
                    state.cartLength = getCartLength(state.cart);
                    console.log(state);
                    return saveState(state);
                }
            
            case CartActionTypes.Decrement:
                {
                    let stateCart;
                    stateCart = state.cart.filter(item=>{
                        if(item.product == action.payload){
                            return item;
                        }
                    });

                    if(stateCart.length==1){
                        let index = state.cart.indexOf(stateCart[0]);
                        if(state.cart[index].quantity>1){
                            state.cart[index].quantity--;
                        }else{
                            state.cart.splice(index, 1);
                        }
                        let idx = indexOf(state.products, action.payload);
                        console.info(idx);
                        state.products[idx].quantity++;
                    }

                    state.cartLength = getCartLength(state.cart);

                    console.log(state);
                    return saveState(state);
                }
        
        default:
            return state ;
    }
}


function getCartLength(cart: CartModel[]): number {
    let total: number = 0;
    cart.forEach(product => {
        total += product.quantity;
    });
    return total;
}

function saveState(state:any){
    localStorage.setItem('store', JSON.stringify(state));
    return Object.assign({},state);
}

function indexOf(array, obj){
    let filtered = array.filter(( item )=>{
        if(item.id == obj.id) return item; 
    }); 
    return filtered.length?array.indexOf(filtered[0]):-1;
}