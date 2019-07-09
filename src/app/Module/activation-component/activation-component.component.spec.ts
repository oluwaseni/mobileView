import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationComponentComponent } from './activation-component.component';

describe('ActivationComponentComponent', () => {
  let component: ActivationComponentComponent;
  let fixture: ComponentFixture<ActivationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
