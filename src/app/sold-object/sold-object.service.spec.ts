import { TestBed } from '@angular/core/testing';

import { SoldObjectService } from './sold-object.service';

describe('SoldObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoldObjectService = TestBed.get(SoldObjectService);
    expect(service).toBeTruthy();
  });
});
