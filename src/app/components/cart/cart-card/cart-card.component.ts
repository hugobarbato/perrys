import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {
  @Input() c:CartModel;
  @Output() addCart:EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() decrementCart:EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { 

  }

  ngOnInit() {

  }

}
