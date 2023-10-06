import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemComputadorComponent } from './mantem-computador.component';

describe('MantemComputadorComponent', () => {
  let component: MantemComputadorComponent;
  let fixture: ComponentFixture<MantemComputadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantemComputadorComponent]
    });
    fixture = TestBed.createComponent(MantemComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
