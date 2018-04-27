import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {EverydayTableComponent } from './everyday-table.component';

describe('CommentTableComponent', () => {
  let component: EverydayTableComponent;
  let fixture: ComponentFixture<EverydayTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverydayTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverydayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
