import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { StoreModel } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductModel } from 'src/app/models/product.model';
import { Add, Decrement } from 'src/app/actions/cart.action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id:any=-1;
  product:ProductModel;
  constructor(
    private route:ActivatedRoute,
    public service: StoreService
    ) { }

  ngOnInit() {
    // recebe id da rota
    this.id = this.route.snapshot.paramMap.get('id');
    // busca no array de produtos 
    this.getProduct();
  }
  getProduct(){
    // aguarda enquanto o serviço é inicializado para buscar informações do produto
    if(this.service && this.service.store){
      let filtered = this.service.store.products.filter(product=>{
        if(product.id == this.id){
          return product;
        }
      });
      this.product = filtered.length ? filtered[0]:null; 
    }else{
      setTimeout(()=>{this.getProduct();},100); 
    }
  }
  // dispara eventos para o reducers
  addCart(){
    this.service.redux.dispatch(Add(this.product));
  }
  decrementCart(){
    this.service.redux.dispatch(Decrement(this.product));
  }
}
