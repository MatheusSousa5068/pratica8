import { Component } from '@angular/core';
import {Computador} from '../../shared/modelo/computador';
import {COMPUTADORES} from '../../shared/modelo/COMPUTADORES';

@Component({
  selector: 'app-mantem-computador',
  templateUrl: './listagem-computadores.component.html',
  styleUrls: ['./listagem-computadores.component.css']
})
export class ListagemComputadoresComponent {
  computadores = COMPUTADORES;
  excluir(computadorAExcluir: Computador): void {
    const indx = this.computadores.findIndex(computador =>
      computador.numeroSerie === computadorAExcluir.numeroSerie);

    this.computadores.splice(indx, 1);
  }
}
