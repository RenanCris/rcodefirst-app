import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'adm', pathMatch: 'full' },
    {path: 'config', component: ConfiguracaoComponent}
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdmRoutingModule { }