import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthprovinceComponent } from './monthprovince-table.component';

describe('monthprovinceComponent', () => {
  let component:  MonthprovinceComponent;
  let fixture: ComponentFixture< MonthprovinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthprovinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( MonthprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
