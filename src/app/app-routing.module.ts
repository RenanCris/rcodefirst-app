import { AdmModule } from './adm/adm.module';
import { ConfiguracaoComponent } from './adm/configuracao/configuracao.component';
import { LoginComponent } from './core/login/login.component';
import { PostCompletoComponent } from './core/post-completo/post-completo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './common/autentication/auth.guard';
import { PaginaAutorComponent } from './core/pagina-autor/pagina-autor.component';
import { PaginaContatosComponent } from './core/pagina-contatos/pagina-contatos.component';

const routes: Routes = [
  {path: '', redirectTo: "/home" , pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'post-completo/:id', component: PostCompletoComponent },
  {path: 'adm', loadChildren: () => import('../app/adm/adm.module').then(m => m.AdmModule) ,canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'autor', component: PaginaAutorComponent},
  {path: 'contato', component: PaginaContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
