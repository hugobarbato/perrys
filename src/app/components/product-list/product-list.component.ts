import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StoreModel } from 'src/app/models/store.model';
import { Store, select } from '@ngrx/store';
import { Init } from 'src/app/actions/store.action';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { Add } from 'src/app/actions/cart.action';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor( private service:StoreService ) { }

  ngOnInit() { }

  addCart(product:ProductModel){
    this.service.redux.dispatch(Add(product));
  }

}
