import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/autentication/autenticacao.service';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from 'src/app/common/component/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  email:string;
  senha:string;

  constructor(public auth : AuthenticationService,
    public toastr: ToastrService,
    private router: Router) { 
      super(toastr,auth);
    }

  ngOnInit(): void {
   
  }

  logar(): void{
    this.auth.login(this.email,this.senha).subscribe(resp =>{
      this.sucesso('Login realizado.')
      setTimeout(()=> this.router.navigate(['/home']) , 500);
    },error =>{
      this.auth.logout();
      this.error(error)
    })
  }
}
