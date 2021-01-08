import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupCompetencesComponent } from './add-group-competences.component';

describe('AddGroupCompetencesComponent', () => {
  let component: AddGroupCompetencesComponent;
  let fixture: ComponentFixture<AddGroupCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
