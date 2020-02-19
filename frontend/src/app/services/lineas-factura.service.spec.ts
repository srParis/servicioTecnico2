import { TestBed } from '@angular/core/testing';

import { LineasFacturaService } from './lineas-factura.service';

describe('LineasFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineasFacturaService = TestBed.get(LineasFacturaService);
    expect(service).toBeTruthy();
  });
});
