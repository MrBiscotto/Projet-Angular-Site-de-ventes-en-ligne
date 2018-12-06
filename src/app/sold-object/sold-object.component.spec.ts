import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldObjectComponent } from './sold-object.component';

describe('SoldObjectComponent', () => {
  let component: SoldObjectComponent;
  let fixture: ComponentFixture<SoldObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
