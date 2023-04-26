import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email:string = '';
  public senha:string = '';

  constructor(public router:Router){
  }

  autenticar(){
    let usuario_ls = JSON.parse(String(localStorage.getItem('usuario')));
    let email_ls = usuario_ls.email;
    let senha_ls = usuario_ls.senha;

    if (email_ls == this.email && window.atob(senha_ls) == this.senha) {
      this.router.navigateByUrl('/home');
    } else {
      alert("Senha ou email incorreto")
    }
  }
}
