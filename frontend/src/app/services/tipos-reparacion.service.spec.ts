import { TestBed } from '@angular/core/testing';

import { TiposReparacionService } from './tipos-reparacion.service';

describe('TiposReparacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiposReparacionService = TestBed.get(TiposReparacionService);
    expect(service).toBeTruthy();
  });
});
