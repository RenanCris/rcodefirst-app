import { NgModule } from '@angular/core';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { CommumModule } from '../common/common.module';
import { AdmRoutingModule } from './adm.routing.module';
import { CommonModule } from '@angular/common';
import { NgxSummernoteModule } from 'ngx-summernote';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from './configuracao/categoria.service';
import { BlockUIModule } from 'ng-block-ui';
import { UsuarioService } from './configuracao/usuario.service';
import { PostService } from './configuracao/post.service';
import { ModeloTextoService } from './configuracao/modelo-texto.service';

@NgModule({
    imports: [CommonModule,CommumModule,AdmRoutingModule,NgxSummernoteModule
        ,FormsModule
        ,BlockUIModule.forRoot()],
    exports: [ConfiguracaoComponent],
    declarations: [ConfiguracaoComponent],
    providers: [CategoriaService,UsuarioService,PostService,ModeloTextoService],
})
export class AdmModule { }
