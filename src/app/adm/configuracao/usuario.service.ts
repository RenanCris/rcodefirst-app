import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './usuario.model';

@Injectable()
export class UsuarioService {

    constructor(private httpClient: HttpClient) { 

    }

    obterUsuarios() : Observable<UsuarioModel[]>{
        return this.httpClient.get<UsuarioModel[]>(environment.apiUrl + `/usuario/todos`);
    }
    
    
}