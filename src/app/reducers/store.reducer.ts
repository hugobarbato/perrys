import { StoreActionTypes } from '../actions/store.action';
import { ActionModel } from '../models/action.model'; 
import { StoreModel } from '../models/store.model'; 
import { CartActionTypes } from '../actions/cart.action';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

export var store = new StoreModel();

export function storeReducer(state = store, action: ActionModel) {
    switch (action.type) {
        case StoreActionTypes.Init: // inicialização do state
            {  
                state.products = action.payload;
                
                return saveState(state);
            };
        case StoreActionTypes.InitLocal: // inicialização do state
            {  
                state = action.payload;
                
                return saveState(state);
            };
        case CartActionTypes.Add: // função para adicionar ou incrementar o carrinho com o produto.
                {    
                    // busca o index do produto no array de produtos
                    let idx = indexOf( state.products, action.payload ); 
                    // verifica a quantidade disponivel
                    if(state.products[idx].quantity>0){
                        // Caso tenha uma quantidade disponivel buscar se já existe dentro do carrinho
                        let cartModel, stateCart;
                        stateCart = state.cart.filter(item=>{
                            if(item.product.id == action.payload.id){
                                return item;
                            }
                        });
                        if(stateCart.length==1){ 
                            // se já existe incrementar
                            let index = state.cart.indexOf(stateCart[0]);
                            state.cart[index].quantity++;
                        }else{
                            // se não adicionar no carrinho
                            cartModel = new CartModel();
                            cartModel.product = action.payload;
                            cartModel.quantity=1;
                            state.cart.push(cartModel);
                        }
                        // decrementar quantidade do array de produtos
                        state.products[idx].quantity--;
                    }

                    // atualiza a quantidade de itens no carrinho
                    state.cartLength = getCartLength(state.cart);

                    // Salva o state no localstorage e retorna um novo objeto para forçar atualização no subscribe do serviço.
                    return saveState(state);
                };

            // Função antiga de remover do carrinho o item, adiciona a função decrementar e limpar carrinho tal funcionalidade.
            // case CartActionTypes.Remove:
            //     {
            //         // Busca o produto no carrinho
            //         let stateCart;
            //         stateCart = state.cart.filter(item=>{
            //             if(item.product == action.payload){
            //                 return item;
            //             }
            //         });
            //         // se tiver no carrionho retirar
            //         if(stateCart.length==1){
            //             let index = state.cart.indexOf(stateCart[0]);
            //             state.cart.splice(index, 1);
            //             let idx = indexOf(state.products, action.payload);
            //             state.products[idx].quantity++;
            //         }

            //         // atualiza a quantidade de itens no carrinho
            //         state.cartLength = getCartLength(state.cart);

            //         console.log(state);
            //         return saveState(state);
            //     };

            case CartActionTypes.Clear:
                { 
                    // retorna quantidade para o array de produtos
                    state.cart.forEach(c=>{
                        let idx = indexOf(state.products, c.product);
                        state.products[idx].quantity+=c.quantity;
                    })
                    // limpa o carrinho
                    state.cart = [];
                    // atualiza tamanho do carrinho
                    state.cartLength = getCartLength(state.cart); 
                    // Salva o state no localstorage e retorna um novo objeto para forçar atualização no subscribe do serviço.                    
                    return saveState(state);
                }
            
            case CartActionTypes.Decrement:
                {
                    // busca produto no carrinho
                    let stateCart;
                    stateCart = state.cart.filter(item=>{
                        if(item.product == action.payload){
                            return item;
                        }
                    });
                    // se tivar no carrinho
                    if(stateCart.length==1){
                        // busca o index dele no carrinho
                        let index = state.cart.indexOf(stateCart[0]);

                        if(state.cart[index].quantity>1){ // se a quantidade for maior que 1 decrementa
                            state.cart[index].quantity--;
                        }else{ // se não remove do carrinho
                            state.cart.splice(index, 1);
                        }
                        // incrementa a quantidade no array de produtos
                        let idx = indexOf(state.products, action.payload);
                        console.info(idx);
                        state.products[idx].quantity++;
                    }

                    // atualiza tamanho do carrinho
                    state.cartLength = getCartLength(state.cart); 
                    // Salva o state no localstorage e retorna um novo objeto para forçar atualização no subscribe do serviço.
                    return saveState(state);
                }
        
        default:
            return state ;
    }
}

// obtem quantidade de itens no carrinho
function getCartLength(cart: CartModel[]): number {
    let total: number = 0;
    cart.forEach(product => {
        total += product.quantity;
    });
    return total;
}

// salva o state no localstorage e retorna um novo objeto.
function saveState(state:any){
    localStorage.setItem('store', JSON.stringify(state));
    return Object.assign({},state);
}

// procura produto no array de produtos baseado no id
function indexOf(array, obj){
    let filtered = array.filter(( item )=>{
        if(item.id == obj.id) return item; 
    }); 
    return filtered.length?array.indexOf(filtered[0]):-1;
}