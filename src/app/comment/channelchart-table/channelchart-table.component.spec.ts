import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelchartTableComponent } from './channelchart-table.component';

describe('ChannelchartTableComponent', () => {
  let component:  ChannelchartTableComponent;
  let fixture: ComponentFixture< ChannelchartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelchartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ChannelchartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
