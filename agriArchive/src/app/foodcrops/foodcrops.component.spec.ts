import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcropsComponent } from './foodcrops.component';

describe('FoodcropsComponent', () => {
  let component: FoodcropsComponent;
  let fixture: ComponentFixture<FoodcropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
