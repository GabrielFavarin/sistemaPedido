import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';


export interface Usuario {
  nome: string,
  email: string,
  senha: string
}

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {

  public nome:string = '';
  public email:string = '';
  public senha:string = '';

  
  ngOnInit(): void {
    this.carregar();
  }

  salvar() {
    
    let dados: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: window.btoa(this.senha),
    }

    localStorage.setItem('usuario', JSON.stringify(dados));
   
  }

  carregar(){
    let dados = JSON.parse(String(localStorage.getItem('usuario')));
    if(dados == null){
      return;
    }
    this.nome= dados.nome;
    this.email = dados.email;
    this.senha = window.atob(dados.senha);
  }


  limpar(){
    this.nome= '';
    this.email = '';
    this.senha = '';
    localStorage.removeItem('usuario');
  }
}
