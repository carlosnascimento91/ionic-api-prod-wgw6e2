import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  url : string = 'https://produtosapi.run.goorm.io/produtos';

  constructor(public http : HttpClient) { }

    obterProdutos(){

      return this.http.get<Object[]>(this.url);

    }

    cadastrarProduto(produto){
      return this.http.post(
        this.url,
        produto
      );
    }

}