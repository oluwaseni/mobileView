import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDirectoryComponent } from './supplier-directory.component';

describe('SupplierDirectoryComponent', () => {
  let component: SupplierDirectoryComponent;
  let fixture: ComponentFixture<SupplierDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
