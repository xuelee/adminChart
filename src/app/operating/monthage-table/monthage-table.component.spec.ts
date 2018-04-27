import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthageComponent } from './monthage-table.component';

describe('monthageComponent', () => {
  let component:  MonthageComponent;
  let fixture: ComponentFixture< MonthageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( MonthageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
