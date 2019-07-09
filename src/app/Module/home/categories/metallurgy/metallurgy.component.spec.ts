import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallurgyComponent } from './metallurgy.component';

describe('MetallurgyComponent', () => {
  let component: MetallurgyComponent;
  let fixture: ComponentFixture<MetallurgyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallurgyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallurgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
