import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BaseComponent } from 'src/app/common/component/base.component';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/common/autentication/autenticacao.service';
import { PostService } from 'src/app/adm/configuracao/post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.scss']
})
export class MiniPostComponent extends BaseComponent implements OnInit  {
 
  @BlockUI() blockUI: NgBlockUI;
  agregados:any;

  constructor(public toastr: ToastrService
    , public auth : AuthenticationService
    , private postService:PostService
    , protected sanitizer: DomSanitizer) {
      super(toastr,auth);
}

  ngOnInit(): void {
   this.postService.obterAgregadoCategoria().subscribe(result =>{
    this.agregados = result;
   })
  }

}
