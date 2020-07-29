import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationcropsComponent } from './plantationcrops.component';

describe('PlantationcropsComponent', () => {
  let component: PlantationcropsComponent;
  let fixture: ComponentFixture<PlantationcropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationcropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationcropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
