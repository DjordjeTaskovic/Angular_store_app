import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorypostComponent } from './categorypost.component';

describe('CategorypostComponent', () => {
  let component: CategorypostComponent;
  let fixture: ComponentFixture<CategorypostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorypostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
