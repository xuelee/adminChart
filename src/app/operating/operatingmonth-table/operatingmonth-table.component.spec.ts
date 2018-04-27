import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {OperatingMonthComponent } from './operatingmonth-table.component';

describe('operatingmonthComponent', () => {
  let component: OperatingMonthComponent;
  let fixture: ComponentFixture<OperatingMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperatingMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
