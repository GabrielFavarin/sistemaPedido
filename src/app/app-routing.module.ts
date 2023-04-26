import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
const routes:Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path:'cidade' , component:CadastroCidadeComponent},
  {path:'usuario' , component:CadastroUsuarioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cliente', component:CadastroClienteComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
