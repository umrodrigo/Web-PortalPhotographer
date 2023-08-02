import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmComponent } from './adm.component';
import { AdmRoutingModule } from './adm-routing.module';

@NgModule({
  declarations: [AdmComponent],
  imports: [
    CommonModule,
    AdmRoutingModule
  ]
})
export class AdmModule { }
