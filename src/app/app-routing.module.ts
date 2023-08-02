import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'bio', loadChildren: () => import('./pages/bio/bio.module').then(m => m.BioModule) },
  { path: 'depoimento', loadChildren: () => import('./pages/depoimento/depoimento.module').then(m => m.DepoimentoModule) },
  { path: 'servicos', loadChildren: () => import('./pages/servicos/servicos.module').then(m => m.ServicosModule) },

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'adm', loadChildren: () => import('./pages/adm/adm.module').then(m => m.AdmModule) },
  
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes, 
      //{ preloadingStrategy: PreloadAllModules },
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
