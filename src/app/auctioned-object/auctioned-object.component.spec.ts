import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionedObjectComponent } from './auctioned-object.component';

describe('AuctionedObjectComponent', () => {
  let component: AuctionedObjectComponent;
  let fixture: ComponentFixture<AuctionedObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionedObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
