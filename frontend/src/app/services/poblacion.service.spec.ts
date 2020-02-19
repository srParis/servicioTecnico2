import { TestBed } from '@angular/core/testing';

import { PoblacionService } from './poblacion.service';

describe('PoblacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoblacionService = TestBed.get(PoblacionService);
    expect(service).toBeTruthy();
  });
});
