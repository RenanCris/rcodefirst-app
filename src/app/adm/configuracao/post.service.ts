import { PostModel, PostAlterarModel } from './post.model';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './usuario.model';
import { EventEmitter } from 'protractor';

@Injectable()
export class PostService {

    OnFiltrarPorTag = new BehaviorSubject<PostAlterarModel[]>(null);    

    constructor(private httpClient: HttpClient) { 

    }

    cadastrarPost(post: PostModel) : Observable<any>{
        return this.httpClient.post<any>(environment.apiUrl + `/post`,post);
    }
    
    alterarPost(post: PostAlterarModel) : Observable<any>{
        return this.httpClient.put<any>(environment.apiUrl + `/post`,post);
    }

    obterPostsPaginado(pagina: number, quantidade:number, texto:string= "", tag:string = "") : Observable<PostAlterarModel[]>{
        return this.httpClient.get<PostAlterarModel[]>(environment.apiUrl + `/post/todas/${pagina}/${quantidade}?texto=${texto}&tag=${tag}`);
    }

    obterPostsPaginadoAtivos(pagina: number, quantidade:number, texto:string= "", tag:string = "") : Observable<PostAlterarModel[]>{
        return this.httpClient.get<PostAlterarModel[]>(environment.apiUrl + `/post/todas-ativo/${pagina}/${quantidade}?texto=${texto}&tag=${tag}`);
    }

    obterPorId(id: number) : Observable<PostAlterarModel>{
        return this.httpClient.get<PostAlterarModel>(environment.apiUrl + `/post/id/${id}`);
    }

    ativarPost(postId: number) : Observable<any>{
        return this.httpClient.put<any>(environment.apiUrl + `/post/ativar/${postId}`,null);
    }

    desativarPost(postId: number) : Observable<any>{
        return this.httpClient.put<any>(environment.apiUrl + `/post/desativar/${postId}`,null);
    }

    deletarPost(postId: number) : Observable<any>{
        return this.httpClient.delete<any>(environment.apiUrl + `/post/${postId}`);
    }

    obterAgregadoCategoria() : Observable<any>{
        return this.httpClient.get<any>(environment.apiUrl + `/post/quantidade-categoria`);
    }

    obterAgregadoTag() : Observable<any>{
        return this.httpClient.get<any>(environment.apiUrl + `/post/quantidade-tag`);
    }
}