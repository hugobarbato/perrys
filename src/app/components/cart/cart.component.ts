import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Add, Decrement, Clear } from 'src/app/actions/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // http://api-desafio-front.justdigital.com.br/
  constructor(public service:StoreService) { }

  ngOnInit() {
  }
  
  addCart(product:any){
    this.service.redux.dispatch(Add(product));
  }
  decrementCart(product:any){
    this.service.redux.dispatch(Decrement(product));
  }
  clearCart(){
    this.service.redux.dispatch(Clear());
  }
}
