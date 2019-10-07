import { Injectable, OnDestroy } from '@angular/core';
import { StoreModel } from '../models/store.model';
import { Store, select } from '@ngrx/store';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs'; 
import { Init, InitLocal } from '../actions/store.action';
import { ProductModel } from '../models/product.model';
// Serviço para gestão da Store do NgRx
@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnDestroy {
  // Variavel para armazenar a inscrição do state;
  public watcherStore:Subscription;
  // Variavel para armazenar o state atual da aplicação recebido do Store
  public store:StoreModel;

  constructor(
    public api: ApiService, // Serviço para consumir a api
    public redux:Store<StoreModel> // Serviço para utilização do redux 
  ) { 
    // Consultando localStorage para obter o store armazenado
    let store = (localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : null); 
    if(store){ // caso possuir inicializar com o local
      this.redux.dispatch(InitLocal(store));
      this.watcherInit();
    }else{ // caso não possuir inicializar com a consulta da api buscando os produtos
      this.api.getProducts().subscribe(data=>{
        this.redux.dispatch(Init(data.products));
        this.watcherInit();
      });
    }
  } 

  // função para observar o state
  watcherInit(){
    this.watcherStore = this.redux.pipe(select('store')).subscribe(data=>{
      this.store = data;
    }); 
  }
  
  // Função para retornar a quantidade atual do carrinho baseado no state
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

  // função para retornar o valor total do carrinho basedo no state
  getTotalPriceCart(){
    let total = 0;
    if(this.store){
      this.store.cart.forEach(item=>{
        total += (item.quantity * item.product.price);
      });
    }
    return total;
  }

  // se desinscreve antes de distruir o serviço.
  ngOnDestroy(){
    this.watcherStore.unsubscribe();
  }

}
