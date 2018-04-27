import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {   ChannelmanagetableComponent } from './channelmanage-table.component';

describe('channelmanagetableComponent', () => {
  let component:  ChannelmanagetableComponent;
  let fixture: ComponentFixture< ChannelmanagetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelmanagetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ChannelmanagetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
