import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { StoreModel } from '../models/store.model';
import { Store, select } from '@ngrx/store';
import { ApiService } from './api.service';
import { Observable, Subscription } from 'rxjs'; 
import { Init, InitLocal } from '../actions/store.action';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnDestroy {
  public watcherStore:Subscription;
  public store:StoreModel;
  constructor(
    public api: ApiService,
    public redux:Store<StoreModel>
  ) { 
    let store = (localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : null); 
    if(store){
      this.redux.dispatch(InitLocal(store));
      this.watcherInit();
    }else{
      this.api.getProducts().subscribe(data=>{
        this.redux.dispatch(Init(data.products));
        this.watcherInit();
      });
    }
  } 

  watcherInit(){
    this.watcherStore = this.redux.pipe(select('store')).subscribe(data=>{
      this.store = data;
    }); 
  }
  
  getCartQuantity(product:ProductModel){
    if(this.store){
      let filtered = this.store.cart.filter(c=>{
        if(c.product.id == product.id) return c;
      });
      return filtered.length?filtered[0].quantity:0;
    }else{
      return 0;
    }
  }

  getTotalPriceCart(){
    let total = 0;
    this.store.cart.forEach(item=>{
      total += (item.quantity * item.product.price);
    });
    return total;
  }

  ngOnDestroy(){
    this.watcherStore.unsubscribe();
  }

}
