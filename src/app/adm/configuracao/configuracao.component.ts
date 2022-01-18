import { ModeloTexto } from './modelo-texto.model';
import { PostService } from './post.service';
import { PostModel, PostAlterarModel } from './post.model';
import { UsuarioModel } from './usuario.model';
import { BaseComponent } from 'src/app/common/component/base.component';
import { CategoriaService } from './categoria.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaModel, CategoriaModelAlteracao } from './categoria.model';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/common/autentication/autenticacao.service';
import { finalize } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';
import { ModeloTextoService } from './modelo-texto.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.scss']
})
export class ConfiguracaoComponent extends BaseComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  config = {
    placeholder: '',
    tabsize: 2,
    height: '500px',
    width: '100%',
    uploadImagePath: '/api/upload',
    toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }

  idCatalogo:number;
  idPost:number;
  categoria:CategoriaModel;
  categorias: Array<CategoriaModelAlteracao>
  categoriaAlteracao:CategoriaModelAlteracao;
  usuarios: Array<UsuarioModel>;
  post :PostModel;
  postAlteracao :PostAlterarModel;
  posts: Array<PostAlterarModel>;
  modelos: Array<ModeloTexto>;
  modeloSelecionado:any = '';

  constructor(private categoriaService:CategoriaService,public toastr: ToastrService
    , public auth : AuthenticationService
    , private usuarioService:UsuarioService
    , private postService:PostService
    , private modeloService:ModeloTextoService) {
      super(toastr,auth) 
    this.categoria = new CategoriaModel();
    this.post = new PostModel();
  }

  ngOnInit(): void {
    this.carrgar_Dados();
  }

  carrgar_Dados() : void {
    this.blockUI.start();
    Promise.all([
      this.carregarDadosCategoria(),
      this.obterUsuarios(),
      this.obterPosts(),
      this.carregarDadosModelo()
    ])
    .finally(() => this.blockUI.stop());
  }

  carregarDadosCategoria() : Promise<void>{
    return new Promise((resolve,reject)=>{
      this.categoriaService.obterCategorias().subscribe((result) =>{
        this.categorias = result;
        resolve();
      },error =>{
        this.error(error);
        reject();
      })
    });
  }

  alterarCategoria(categoria : CategoriaModelAlteracao) : void {
    this.idCatalogo = categoria.idCatalogo;
    this.categoria = Object.assign(categoria,{});
  }

  salvar(){
    this.blockUI.start();

    if(this.idCatalogo){
      this.categoriaAlteracao =  new CategoriaModelAlteracao(this.idCatalogo);
      this.categoriaAlteracao.descricao = this.categoria.descricao;
      this.categoriaAlteracao.categoria = this.categoria.categoria;
      this.categoriaAlteracao.tag = this.categoria.tag;
      this.categoriaAlteracao.icone = this.categoria.icone;
      
      this.categoriaService.alterarCategorias(this.categoriaAlteracao)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(result =>{
        this.sucesso("Categoria Alterada");
      
      },error =>{
        this.error(error);
      })
    }else{
      this.categoriaService.criarCategorias(this.categoria)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(result =>{
        this.sucesso("Categoria Criada");
        this.carregarDadosCategoria();
      },error =>{
        this.error(error);
      })
    }

    this._limpar();
  }

  private _limpar() {
    this.idCatalogo = null;
    this.categoriaAlteracao = new CategoriaModelAlteracao(this.idCatalogo);
    this.categoria = new CategoriaModel();
    ;
  }

  private _limparPost() {
    this.idPost = null;
    this.postAlteracao = new PostAlterarModel();
    this.post = new PostModel();
    
  }

  limpar(){
    this._limpar();
  }

  excluir(id:number) : void{
    this.categoriaService.excluirCategorias(id)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(result =>{
      this.sucesso("Categoria Excluída");
      this.carregarDadosCategoria();
    },error =>{
      this.info(error);
    })
  }

  obterUsuarios(): Promise<void>{
    return new Promise((resolve,reject)=>{
      this.usuarioService.obterUsuarios().subscribe((result) =>{
        this.usuarios = result;
        resolve();
      },error =>{
        this.error(error);
        reject();
      })
    });
  }

  cadastrarPost() : void {
    this.blockUI.start();

    if(this.idPost){
      
      this.postAlteracao = new PostAlterarModel();
      this.postAlteracao.idPost = this.idPost;
      this.postAlteracao.texto = this.post.texto;
      this.postAlteracao.titulo = this.post.titulo;
      this.postAlteracao.autorId = this.post.autorId;
      this.postAlteracao.catalogoTecnologiaIdCatalogo = this.post.catalogoTecnologiaIdCatalogo;

      this.postService.alterarPost(this.postAlteracao)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(result =>{
        this.sucesso("Post Alterada");
        this.obterPosts();
      },error =>{
        this.error(error);
      })
    }else{
      this.postService.cadastrarPost(this.post)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(result =>{
        this.sucesso("Post Criado");
        this.obterPosts();
      },error =>{
        this.error(error);
      })
    }

  }

  obterPosts() : Promise<void>{
    return new Promise((resolve,reject)=>{
      this.postService.obterPostsPaginado(0,10).subscribe((result) =>{
        this.posts = result;
        resolve();
      },error =>{
        this.error(error);
        reject();
      })
    });
  }

  excluirPost(id:number) : void{
    this.blockUI.start();
    this.postService.deletarPost(id)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(result =>{
      this.sucesso("Post Excluído");
      this.obterPosts();
    },error =>{
      console.log(error)
      this.info(error.data);
    })
  }

  ativarPost(id:number, ativo:boolean) : void{
    this.blockUI.start();
    if(ativo){
      this.postService.desativarPost(id)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(result =>{
        this.sucesso("Atualizado status");
        this.obterPosts();
      },error =>{
        console.log(error)
        this.info(error.data);
      })
    }else{
      this.postService.ativarPost(id)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(result =>{
        this.sucesso("Atualizado status");
        this.obterPosts();
      },error =>{
        console.log(error)
        this.info(error.data);
      })
    }
   
  }

  alterarPost(post : any) : void {
    this.idPost = post.idPost;
    let _post = Object.assign(post,{});
    this.post = _post;
    this.post.autorId = _post.autor.id;
    this.post.catalogoTecnologiaIdCatalogo = _post.catalogoTecnologia.idCatalogo;
    console.log(this.post)
  }

  limparPost() : void {
    this._limparPost();
  }

  carregarDadosModelo() : Promise<void>{
    return new Promise((resolve,reject)=>{
      this.modeloService.obter().subscribe((result) =>{
        this.modelos = result;
        resolve();
      },error =>{
        this.error(error);
        reject();
      })
    });
  }

  selecionarModelo() : void {
    this.post.texto = this.modeloSelecionado;
  }
}
