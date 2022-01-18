import { ModeloTexto } from './modelo-texto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ModeloTextoService {

    constructor(private httpClient: HttpClient) { 
    }

    obter() : Observable<ModeloTexto[]>{
        return this.httpClient.get<ModeloTexto[]>(environment.apiUrl + `/modelo-texto/todos`);
    }
}