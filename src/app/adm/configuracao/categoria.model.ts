export class CategoriaModel{
    descricao:string;
    categoria:string;
    tag:string;
    icone:string;
}

export class CategoriaModelAlteracao extends CategoriaModel{
    idCatalogo:number

    constructor(id:number) {
        super();
        this.idCatalogo = id;
    }
}