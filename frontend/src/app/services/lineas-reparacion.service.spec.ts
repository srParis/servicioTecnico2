import { TestBed } from '@angular/core/testing';

import { LineasReparacionService } from './lineas-reparacion.service';

describe('LineasReparacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineasReparacionService = TestBed.get(LineasReparacionService);
    expect(service).toBeTruthy();
  });
});
