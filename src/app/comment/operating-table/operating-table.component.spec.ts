import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingTableComponent } from './operating-table.component';

describe('OperatingTableComponent', () => {
  let component:  OperatingTableComponent;
  let fixture: ComponentFixture< OperatingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperatingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( OperatingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
