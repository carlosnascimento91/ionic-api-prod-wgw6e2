import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome : string;
  preco : string;
  qtd : string;

  constructor(public http : HttpClient, public produtoService : ProdutoService) { }

  ngOnInit() {
  }

  adicionar(){

    var prod = {nome : this.nome, preco : this.preco, qtd : this.qtd};
    this.produtoService.cadastrarProduto(prod)
    .subscribe(
      resposta => console.log(resposta),
      erro => console.log(erro)
    );
  }

}