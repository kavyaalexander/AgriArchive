import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplantationcropsComponent } from './editplantationcrops.component';

describe('EditplantationcropsComponent', () => {
  let component: EditplantationcropsComponent;
  let fixture: ComponentFixture<EditplantationcropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditplantationcropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplantationcropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
