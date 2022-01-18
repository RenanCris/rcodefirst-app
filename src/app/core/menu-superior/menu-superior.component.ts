import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { PostAlterarModel } from 'src/app/adm/configuracao/post.model';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/common/autentication/autenticacao.service';
import { PostService } from 'src/app/adm/configuracao/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/common/component/base.component';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.scss']
})
export class MenuSuperiorComponent extends BaseComponent implements OnInit  {
 
  @BlockUI() blockUI: NgBlockUI;
  posts: Array<PostAlterarModel>;
  public readonly totalExibir = 5;
  public paginaAtual = 0;
  public totalPosts:number;

  constructor(public toastr: ToastrService
    , public auth : AuthenticationService
    , private postService:PostService
    , protected sanitizer: DomSanitizer) {
      super(toastr,auth);
  }

  ngOnInit(): void {
    
  }

  obterPosts(tag:string) : Promise<void>{
    return new Promise((resolve,reject)=>{
      this.postService.obterPostsPaginadoAtivos(this.paginaAtual,this.totalExibir,"",tag).subscribe((result) =>{
        if(result.length == 0){
          this.toastr.warning("Nenhum registro encontrado!", "Aviso");
          return;
        }

        this.postService.OnFiltrarPorTag.next(result);
      
        resolve();
      },error =>{
        this.error(error);
        reject();
      })
    });
  }
}
