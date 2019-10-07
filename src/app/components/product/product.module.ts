import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatIconModule, MatButtonModule, MatDividerModule} from '@angular/material';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent],
  exports:[ProductComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule
  ]
})
export class ProductModule { }
