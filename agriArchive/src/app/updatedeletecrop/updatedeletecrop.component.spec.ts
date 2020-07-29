import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedeletecropComponent } from './updatedeletecrop.component';

describe('UpdatedeletecropComponent', () => {
  let component: UpdatedeletecropComponent;
  let fixture: ComponentFixture<UpdatedeletecropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedeletecropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedeletecropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
