import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BaseComponent } from 'src/app/common/component/base.component';
import { AuthenticationService } from 'src/app/common/autentication/autenticacao.service';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/adm/configuracao/post.service';
import { PostAlterarModel } from 'src/app/adm/configuracao/post.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent extends BaseComponent implements OnInit  {
 
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
    this.carrgar_Dados();

    this.postService.OnFiltrarPorTag.subscribe(posts => {
      this.posts = posts
    });
  }

  carrgar_Dados() : void {
    this.blockUI.start();
    Promise.all([
      this.obterPosts()
    ])
    .finally(() => this.blockUI.stop());
  }

  proximaPagina(sinal:string) {

    if(sinal == '-'){
      if(this.paginaAtual)
        this.paginaAtual--;
    }
    else{
      this.paginaAtual++;
    }
    this.carrgar_Dados();
  } 

  obterPosts() : Promise<void>{
    return new Promise((resolve,reject)=>{
      this.postService.obterPostsPaginadoAtivos(this.paginaAtual,this.totalExibir).subscribe((result) =>{
        this.posts = result;
        this.totalPosts = this.posts.length;
        resolve();
      },error =>{
        this.error(error);
        reject();
      })
    });
  }
}
