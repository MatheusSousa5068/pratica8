import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import { MantemComputadorComponent } from './computador/mantem-computador/mantem-computador.component';
import { ListagemComputadoresComponent } from './computador/listagem-computadores/listagem-computadores.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'cadastrocomputador',
    component: MantemComputadorComponent
  },
  {
    path: 'editacomputador/:id',
    component: MantemComputadorComponent
  },
  {
    path: 'listagemcomputadores',
    component: ListagemComputadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
