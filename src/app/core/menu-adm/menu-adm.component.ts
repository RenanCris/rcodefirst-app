import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/common/component/base.component';
import { AuthenticationService } from 'src/app/common/autentication/autenticacao.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.scss']
})
export class MenuAdmComponent extends BaseComponent  implements OnInit {

  isAutenticado: boolean = false;

  constructor(public auth : AuthenticationService,
    public toastr: ToastrService,
    ) { 
      super(toastr,auth);
    }

  ngOnInit(): void {
     this.auth.currentUser.subscribe((user) => this.isAutenticado = (user != undefined));
  }

  logout() : void {
    this.auth.logout();
    this.info('Logout realiado!',10000);
  }

}
