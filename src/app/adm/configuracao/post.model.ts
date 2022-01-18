export class PostModel{
    titulo:string;
    texto:string;
    catalogoTecnologiaIdCatalogo:number = 0;
    autorId:number = 0;
}

export class PostAlterarModel extends PostModel{
   idPost:number;
}

export class PostAtivarDesativarModel {
    idPost:number;
    ativo:boolean;
 }