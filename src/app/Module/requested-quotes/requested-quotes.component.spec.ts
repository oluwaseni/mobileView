import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedQuotesComponent } from './requested-quotes.component';

describe('RequestedQuotesComponent', () => {
  let component: RequestedQuotesComponent;
  let fixture: ComponentFixture<RequestedQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
