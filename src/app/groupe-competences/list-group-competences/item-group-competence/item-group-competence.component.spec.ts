import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupCompetenceComponent } from './item-group-competence.component';

describe('ItemGroupCompetenceComponent', () => {
  let component: ItemGroupCompetenceComponent;
  let fixture: ComponentFixture<ItemGroupCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGroupCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
