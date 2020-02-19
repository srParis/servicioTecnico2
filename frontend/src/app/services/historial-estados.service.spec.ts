import { TestBed } from '@angular/core/testing';

import { HistorialEstadosService } from './historial-estados.service';

describe('HistorialEstadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialEstadosService = TestBed.get(HistorialEstadosService);
    expect(service).toBeTruthy();
  });
});
