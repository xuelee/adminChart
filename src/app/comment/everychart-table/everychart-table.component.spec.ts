import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverychartTableComponent } from './everychart-table.component';

describe('EverychartTableComponent', () => {
  let component:  EverychartTableComponent;
  let fixture: ComponentFixture< EverychartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EverychartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( EverychartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
