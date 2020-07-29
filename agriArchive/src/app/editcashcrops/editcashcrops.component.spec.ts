import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcashcropsComponent } from './editcashcrops.component';

describe('EditcashcropsComponent', () => {
  let component: EditcashcropsComponent;
  let fixture: ComponentFixture<EditcashcropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcashcropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcashcropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
