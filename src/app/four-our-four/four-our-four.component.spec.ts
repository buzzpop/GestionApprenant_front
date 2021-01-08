import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOurFourComponent } from './four-our-four.component';

describe('FourOurFourComponent', () => {
  let component: FourOurFourComponent;
  let fixture: ComponentFixture<FourOurFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourOurFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOurFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
