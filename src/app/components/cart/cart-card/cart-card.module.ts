import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatIconModule, MatButtonModule, MatDividerModule} from '@angular/material';
import { CartCardComponent } from './cart-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartCardComponent],
  exports:[CartCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule
  ]
})
export class CartCardModule { }
