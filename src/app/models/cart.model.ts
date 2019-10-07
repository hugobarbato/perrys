import { ProductModel } from './product.model';

export class CartModel {
    public product: ProductModel = new ProductModel();
    public quantity: number = 0;
}