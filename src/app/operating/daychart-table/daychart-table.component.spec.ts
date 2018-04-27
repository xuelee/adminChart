import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaychartComponent } from './daychart-table.component';

describe('DaychartComponent', () => {
  let component:  DaychartComponent;
  let fixture: ComponentFixture< DaychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( DaychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
