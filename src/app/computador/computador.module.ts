import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComputadoresComponent } from './listagem-computadores/listagem-computadores.component';
import { MantemComputadorComponent } from './mantem-computador/mantem-computador.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { PipesModule } from '../pipes/pipes.module';
import { FlexModule } from '@angular/flex-layout';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ListagemComputadoresComponent,
    MantemComputadorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule,
    RouterLink
  ],
  exports: [
    ListagemComputadoresComponent,
    MantemComputadorComponent
  ]
})
export class ComputadorModule { }
