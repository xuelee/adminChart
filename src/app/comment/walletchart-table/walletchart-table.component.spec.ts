import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletchartTableComponent } from './walletchart-table.component';

describe('WalletchartTableComponent', () => {
  let component:  WalletchartTableComponent;
  let fixture: ComponentFixture< WalletchartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WalletchartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( WalletchartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
