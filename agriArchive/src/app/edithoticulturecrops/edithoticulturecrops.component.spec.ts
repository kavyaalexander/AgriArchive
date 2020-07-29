import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithoticulturecropsComponent } from './edithoticulturecrops.component';

describe('EdithoticulturecropsComponent', () => {
  let component: EdithoticulturecropsComponent;
  let fixture: ComponentFixture<EdithoticulturecropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdithoticulturecropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithoticulturecropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
