import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodcropsComponent } from './addfoodcrops.component';

describe('AddfoodcropsComponent', () => {
  let component: AddfoodcropsComponent;
  let fixture: ComponentFixture<AddfoodcropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfoodcropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoodcropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
