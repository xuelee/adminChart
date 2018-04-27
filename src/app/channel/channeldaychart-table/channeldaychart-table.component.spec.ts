import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDayChartComponent } from './channeldaychart-table.component';

describe('ChannelDayChartComponent', () => {
  let component:  ChannelDayChartComponent;
  let fixture: ComponentFixture< ChannelDayChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelDayChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ChannelDayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
