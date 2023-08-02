import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ServicosComponent } from './servicos.component';

const routes: Routes = [
  { path: '', component: ServicosComponent }
];

@NgModule({
  declarations: [ServicosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicosModule { }
