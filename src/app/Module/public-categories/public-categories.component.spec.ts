import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCategoriesComponent } from './public-categories.component';

describe('PublicCategoriesComponent', () => {
  let component: PublicCategoriesComponent;
  let fixture: ComponentFixture<PublicCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
