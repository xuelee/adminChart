import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelactivityTableComponent } from './channelactivity-table.component';

describe('CommentTableComponent', () => {
  let component: ChannelactivityTableComponent;
  let fixture: ComponentFixture<ChannelactivityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelactivityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelactivityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
