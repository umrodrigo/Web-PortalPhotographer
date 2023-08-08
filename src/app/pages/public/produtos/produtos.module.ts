import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent }
];

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProdutosModule { }
