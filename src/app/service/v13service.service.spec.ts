import { TestBed } from '@angular/core/testing';

import { V13serviceService } from './v13service.service';

describe('V13serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: V13serviceService = TestBed.get(V13serviceService);
    expect(service).toBeTruthy();
  });
});
