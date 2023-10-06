import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemComputadoresComponent } from './listagem-computadores.component';

describe('ListagemComputadoresComponent', () => {
  let component: ListagemComputadoresComponent;
  let fixture: ComponentFixture<ListagemComputadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemComputadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemComputadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
