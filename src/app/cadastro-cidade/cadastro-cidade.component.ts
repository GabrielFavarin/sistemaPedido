import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {

  public nome:string = '';
  public estado:string = '';

  ngOnInit(): void {
    this.carregar();
  }

  salvar(){
    localStorage.setItem('nome', this.nome);
    //localStorage.setItem('estado', this.estado);
  }

  limpar(){
    localStorage.clear();
    //localStorage.setItem('estado', this.estado);
  }

  carregar(){
    this.nome = String(localStorage.getItem('nome'));
  }
}
