import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromosComponent } from './add-promos.component';

describe('AddPromosComponent', () => {
  let component: AddPromosComponent;
  let fixture: ComponentFixture<AddPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
