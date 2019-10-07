// VENDORS
import { MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatBadgeModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule, LOCALE_ID } from '@angular/core';
// Setando local da aplicação
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt'; 
registerLocaleData(ptBr)
// ROOT MODULE
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './reducers';
// Components
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
// Modulos
import { CartCardModule } from './components/cart/cart-card/cart-card.module';
import { ProductModule } from './components/product/product.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    RouterModule,
    //AppModules
    ProductModule,
    CartCardModule,
    //Material Modules
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    AppBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent, AppBarComponent]
})
export class AppModule { }
