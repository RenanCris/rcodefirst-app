import { Component, OnInit } from '@angular/core';
import { BlockUI,NgBlockUI } from 'ng-block-ui';
import { BaseComponent } from 'src/app/common/component/base.component';
import { PostAlterarModel } from 'src/app/adm/configuracao/post.model';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/common/autentication/autenticacao.service';
import { PostService } from 'src/app/adm/configuracao/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-completo',
  templateUrl: './post-completo.component.html',
  styleUrls: ['./post-completo.component.scss']
})
export class PostCompletoComponent extends BaseComponent implements OnInit  {
 
  @BlockUI() blockUI: NgBlockUI;
  post: any;
  idPost:number;

  constructor(public toastr: ToastrService
    , public auth : AuthenticationService
    , private postService:PostService
    , protected sanitizer: DomSanitizer
    , private route : ActivatedRoute) {
      super(toastr,auth);
      this.post = new PostAlterarModel();
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.idPost =  params['id'];

      this.blockUI.start('Carregando...');
      this.obterPosts(this.idPost).finally(() => this.blockUI.stop());
    });
   
  }

  private obterPosts(id:number) : Promise<void>{
    return new Promise((resolve,reject)=>{
      this.postService.obterPorId(id).subscribe((result) =>{
        this.post = result;
        resolve();
      },error =>{
        this.error(error);
        reject();
      })
    });
  }

}
