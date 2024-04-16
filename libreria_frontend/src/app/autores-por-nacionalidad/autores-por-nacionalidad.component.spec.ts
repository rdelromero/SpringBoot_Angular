import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresPorNacionalidadComponent } from './autores-por-nacionalidad.component';

describe('AutoresPorNacionalidadComponent', () => {
  let component: AutoresPorNacionalidadComponent;
  let fixture: ComponentFixture<AutoresPorNacionalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresPorNacionalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresPorNacionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
