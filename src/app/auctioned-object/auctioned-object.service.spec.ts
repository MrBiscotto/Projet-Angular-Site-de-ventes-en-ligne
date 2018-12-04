import { TestBed } from '@angular/core/testing';

import { AuctionedObjectService } from './auctioned-object.service';

describe('AuctionedObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuctionedObjectService = TestBed.get(AuctionedObjectService);
    expect(service).toBeTruthy();
  });
});
