import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranavegacionAdminComponent } from './barranavegacion-admin.component';

describe('BarranavegacionAdminComponent', () => {
  let component: BarranavegacionAdminComponent;
  let fixture: ComponentFixture<BarranavegacionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarranavegacionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarranavegacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
