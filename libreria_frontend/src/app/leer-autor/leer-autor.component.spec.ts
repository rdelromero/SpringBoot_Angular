import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerAutorComponent } from './leer-autor.component';

describe('LeerAutorComponent', () => {
  let component: LeerAutorComponent;
  let fixture: ComponentFixture<LeerAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeerAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
