import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReparacionesUserComponent } from './listar-reparaciones-user.component';

describe('ListarReparacionesUserComponent', () => {
  let component: ListarReparacionesUserComponent;
  let fixture: ComponentFixture<ListarReparacionesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarReparacionesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReparacionesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
