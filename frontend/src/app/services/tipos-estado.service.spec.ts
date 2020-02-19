import { TestBed } from '@angular/core/testing';

import { TiposEstadoService } from './tipos-estado.service';

describe('TiposEstadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiposEstadoService = TestBed.get(TiposEstadoService);
    expect(service).toBeTruthy();
  });
});
