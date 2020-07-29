import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashcropsComponent } from './cashcrops.component';

describe('CashcropsComponent', () => {
  let component: CashcropsComponent;
  let fixture: ComponentFixture<CashcropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashcropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashcropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
