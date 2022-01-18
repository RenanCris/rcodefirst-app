import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModelAlteracao, CategoriaModel } from './categoria.model';

@Injectable()
export class CategoriaService {

    constructor(private httpClient: HttpClient) { 

    }

    obterCategorias() : Observable<CategoriaModelAlteracao[]>{
        return this.httpClient.get<CategoriaModelAlteracao[]>(environment.apiUrl + `/catalogo-tecnologia/todas`);
    }
    
    criarCategorias(categoria:CategoriaModel) : Observable<void>{
        return this.httpClient.post<void>(environment.apiUrl + `/catalogo-tecnologia`,categoria);
    }

    alterarCategorias(categoria:CategoriaModelAlteracao) : Observable<void>{
        return this.httpClient.put<void>(environment.apiUrl + `/catalogo-tecnologia`,categoria);
    }

    excluirCategorias(id:number) : Observable<any>{
        return this.httpClient.delete<any>(environment.apiUrl + `/catalogo-tecnologia/${id}`);
    }
}