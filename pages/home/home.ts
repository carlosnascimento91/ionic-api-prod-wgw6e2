import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CadastroComponent } from '../cadastro/cadastro.component';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos : Object[];

  constructor(public navCtrl: NavController, public produtoService : ProdutoService) {
      this.produtoService.obterProdutos()
      .subscribe(
      data => {
                this.produtos = data;
                // console.log(data);
                // console.log(this.produtos);
              },
      erro => console.log(erro)
      );

  }

  cadastrar(){
    // novo componente
    this.navCtrl.push(CadastroComponent);
  }

}
