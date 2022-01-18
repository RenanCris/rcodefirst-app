import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../autentication/autenticacao.service';
import { isArray } from 'util';

export abstract class BaseComponent {

    private toast : any = {
        timeOut: 8000,
        positionClass: 'toast-bottom-center',
    }
    
    constructor(public toastr: ToastrService
        , public auth : AuthenticationService) {
    }

    sucesso(msg:string) : void {
        this.toastr.success('Sucesso!', msg ,this.toast);
    }

    error(msg:any) : void {

        let _msg = msg;
        if(isArray(msg)){
            _msg = msg.join(' , ');
        }

        this.toastr.error(' Erro! ', _msg ,this.toast);
    }

    info(msg:string, tempo:number = null) : void {
        if(tempo)
            this.toast.timeOut = tempo
            
        this.toastr.warning('Informação!', msg ,this.toast);
    }

    
}