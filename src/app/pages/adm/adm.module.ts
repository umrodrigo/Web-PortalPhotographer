import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmComponent } from './adm.component';
import { AdmRoutingModule } from './adm-routing.module';
import { AdmToolbarComponent } from 'src/app/components/adm-toolbar/adm-toolbar.component';

@NgModule({
  declarations: [AdmComponent],
  imports: [
    CommonModule,
    AdmRoutingModule,
  ],
})
export class AdmModule { }
