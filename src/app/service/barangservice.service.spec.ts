import { TestBed } from '@angular/core/testing';

import { BarangserviceService } from './barangservice.service';

describe('BarangserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarangserviceService = TestBed.get(BarangserviceService);
    expect(service).toBeTruthy();
  });
});
