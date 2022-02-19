import { Component } from '@angular/core';
import { Produto } from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public lista_produtos : Produto[] = [];
  public nome : string | undefined;
  public preco : number | undefined;
  public marca : string | undefined;
  public hardware : string ="";
  public estado : string ="";
  public anolanc : string ="";
  public rgb : string="";
  

  public edicao : boolean = false;   /* para mudar o h1 de adicionar produto para editar produto */
  public indice : number = -1;   /* definindo indice do vetor como se ele nao estivesse no vetor */

  constructor()
  {
    /* let cria uma variavel */
    /* let produto = new Produto("camisa", 150);   
    this.lista_produtos.push(produto);
    this.lista_produtos.push(new Produto("camiseta", 30));
    this.lista_produtos.push(new Produto("calça", 100)); */
  }

  public salvar() : void{
    if(!this.nome)  /* se n tiver nome */
    {
      alert("Nome é obrigatório!");
      return;
    }

    if(!this.preco)  /* se n tiver preco */
    {
      alert("Preço é obrigatório!");
      return;
    }
    if(!this.marca)
    {
      alert("Marca é obrigatória!");
      return;
    }
    if(!this.hardware)
    {
      alert("O tipo do hardware é obrigatório!");
      return;
    }
    if(!this.estado)
    {
      alert("O tipo do estado é obrigatório!");
      return;
    }
    if(!this.anolanc)
    {
      alert("O ano de lançamento é obrigatório!");
      return;
    }
    if(!this.rgb)
    {
      alert("a informação sobre RGB é obrigatória!");
      return;
    }


    if(this.indice == -1){

    let produto = new Produto(this.nome, this.preco, this.marca, this.hardware, this.estado, this.anolanc, this.rgb);   /* let cria uma variavel */
    this.lista_produtos.push(produto);
    alert("Produto Cadastrado!");
  }
  else
  {
    this.lista_produtos[this.indice].setNome(this.nome);  /* recebendo nome novo */
    this.lista_produtos[this.indice].setPreco(this.preco);  /* recebendo preco */
    this.lista_produtos[this.indice].setMarca(this.marca);
    this.lista_produtos[this.indice].setHardware(this.hardware);
    this.lista_produtos[this.indice].setEstado(this.estado);
    this.lista_produtos[this.indice].setAnolanc(this.anolanc);
    this.lista_produtos[this.indice].setRgb(this.rgb);
    alert("Produto atualizado!");
    this.edicao = false;
    this.indice = -1;
  }
    this.nome = undefined;
    this.preco = undefined;
    this.marca = undefined;
    this.hardware = "";
    this.estado = "";
    this.anolanc = "";
    this.rgb = "";
  }

  public excluir(index : number) : void{
    this.lista_produtos.splice(index, 1);   /* excluindo o produto */
    alert("Produto Excluído com Sucesso!");

  }

  public editar(index : number) : void{
    this.edicao = true;
    this.indice = index;
    this.nome = this.lista_produtos[index].getNome();
    this.preco= this.lista_produtos[index].getPreco();
    this.marca = this.lista_produtos[index].getMarca();
    this.hardware = this.lista_produtos[index].getHardware();
    this.estado = this.lista_produtos[index].getEstado();
    this.anolanc = this.lista_produtos[index].getAnolanc();
    this.rgb = this.lista_produtos[index].getRgb();
  }
}
