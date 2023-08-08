import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common/common-layout/common-layout.component';
import { AdmLayoutComponent } from './layouts/admin/adm-layout/adm-layout.component';
import { LoginLayoutComponent } from './layouts/login/login-layout/login-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('./pages/public/home/home.module').then(m => m.HomeModule) },
      { path: 'bio', loadChildren: () => import('./pages/public/bio/bio.module').then(m => m.BioModule) },
      { path: 'depoimento', loadChildren: () => import('./pages/public/depoimento/depoimento.module').then(m => m.DepoimentoModule) },
      { path: 'produtos', loadChildren: () => import('./pages/public/produtos/produtos.module').then(m => m.ProdutosModule) },
    ],
  },
  { 
    path: 'login', 
    component: LoginLayoutComponent,
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'adm', 
    component: AdmLayoutComponent,
    loadChildren: () => import('./pages/adm/adm.module').then(m => m.AdmModule) 
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
