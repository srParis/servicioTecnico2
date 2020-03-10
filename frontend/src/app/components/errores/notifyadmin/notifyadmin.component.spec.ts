import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyadminComponent } from './notifyadmin.component';

describe('NotifyadminComponent', () => {
  let component: NotifyadminComponent;
  let fixture: ComponentFixture<NotifyadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
