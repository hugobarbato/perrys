import { ProductModel } from './product.model';
import { CartModel } from './cart.model';

export class StoreModel {
    public products: ProductModel[] = [] ;
    public cart: CartModel[] = [];
    public cartLength:number = 0;
}