import { Component } from '@angular/core';
import {Computador} from '../../shared/modelo/computador';
import {COMPUTADORES} from '../../shared/modelo/COMPUTADORES';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mantem-computador',
  templateUrl: './mantem-computador.component.html',
  styleUrls: ['./mantem-computador.component.css']
})
export class MantemComputadorComponent {

  computadorDeManutencao: Computador;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  computadores = COMPUTADORES;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.computadorDeManutencao = new Computador('', '', '', '');
    const NumeroSerieParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (NumeroSerieParaEdicao) {
      // editando
      const computadorEncontrado = this.computadores.find(
        computador => computador.numeroSerie === NumeroSerieParaEdicao);
      if (computadorEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.computadorDeManutencao = computadorEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.computadorDeManutencao) {
      this.computadores.push(this.computadorDeManutencao);
    }
    this.computadorDeManutencao = new Computador('', '', '', '');
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemcomputadores']);
  }

}
