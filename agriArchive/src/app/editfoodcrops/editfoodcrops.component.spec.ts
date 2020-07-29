import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfoodcropsComponent } from './editfoodcrops.component';

describe('EditfoodcropsComponent', () => {
  let component: EditfoodcropsComponent;
  let fixture: ComponentFixture<EditfoodcropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfoodcropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfoodcropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
