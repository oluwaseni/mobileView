import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSuppliersComponent } from './public-suppliers.component';

describe('PublicSuppliersComponent', () => {
  let component: PublicSuppliersComponent;
  let fixture: ComponentFixture<PublicSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
