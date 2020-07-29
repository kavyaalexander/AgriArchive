import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecropsComponent } from './updatecrops.component';

describe('UpdatecropsComponent', () => {
  let component: UpdatecropsComponent;
  let fixture: ComponentFixture<UpdatecropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
