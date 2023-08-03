import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './bio.component';

const routes: Routes = [
  { path: '', component: BioComponent }
];

@NgModule({
  declarations: [BioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BioModule { }
