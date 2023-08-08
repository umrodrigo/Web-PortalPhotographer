import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmToolbarComponent } from './components/adm-toolbar/adm-toolbar.component';
import { CommonLayoutComponent } from './layouts/common/common-layout/common-layout.component';
import { AdmLayoutComponent } from './layouts/admin/adm-layout/adm-layout.component';
import { LoginLayoutComponent } from './layouts/login/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
    LoginLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
