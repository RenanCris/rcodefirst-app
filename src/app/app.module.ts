import { PostService } from './adm/configuracao/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavegacaoComponent } from './core/menu-navegacao/menu-navegacao.component';
import { PostComponent } from './core/post/post.component';
import { SessaoIntroComponent } from './core/sessao-intro/sessao-intro.component';
import { MiniPostComponent } from './core/mini-post/mini-post.component';
import { ListaPostComponent } from './core/lista-post/lista-post.component';
import { SessaoSobreComponent } from './core/sessao-sobre/sessao-sobre.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuSuperiorComponent } from './core/menu-superior/menu-superior.component';
import { HomeComponent } from './core/home/home.component';
import { PostCompletoComponent } from './core/post-completo/post-completo.component';
import { LoginComponent } from './core/login/login.component';
import { MenuAdmComponent } from './core/menu-adm/menu-adm.component';

import { NgxSummernoteModule } from 'node_modules/ngx-summernote';
import { CommumModule } from './common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'ng-block-ui';
import { PaginaAutorComponent } from './core/pagina-autor/pagina-autor.component';
import { PaginaContatosComponent } from './core/pagina-contatos/pagina-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacaoComponent,
    PostComponent,
    SessaoIntroComponent,
    MiniPostComponent,
    ListaPostComponent,
    SessaoSobreComponent,
    FooterComponent,
    MenuSuperiorComponent,
    HomeComponent,
    PostCompletoComponent,
    LoginComponent,
    MenuAdmComponent,
    PaginaAutorComponent,
    PaginaContatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CommumModule,
    NgxSummernoteModule,
    BlockUIModule.forRoot()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
