import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Client {
  nome: string,
  cpf: string,
  city: string
}

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  client = {
    name: '',
    cpf: '',
    city: ''
  };

  salvar() {
    let dados: Client = {
      nome: this.client.name,
      cpf: this.client.cpf,
      city: this.client.city,
    }

    let listaClientes = JSON.parse(String(localStorage.getItem('cliente')));

    if (listaClientes == null) {
      listaClientes = [];
    }
    listaClientes.push(dados);
    localStorage.setItem('cliente', JSON.stringify(listaClientes));

    this.client.name = '';
    this.client.cpf = '';
    this.client.city = '';
  }
}
