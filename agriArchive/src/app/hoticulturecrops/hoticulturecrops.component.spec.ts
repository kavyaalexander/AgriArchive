import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoticulturecropsComponent } from './hoticulturecrops.component';

describe('HoticulturecropsComponent', () => {
  let component: HoticulturecropsComponent;
  let fixture: ComponentFixture<HoticulturecropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoticulturecropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoticulturecropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
