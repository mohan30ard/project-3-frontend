import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainRoutesComponent } from './view-train-routes.component';

describe('ViewTrainRoutesComponent', () => {
  let component: ViewTrainRoutesComponent;
  let fixture: ComponentFixture<ViewTrainRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTrainRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrainRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
