import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletchartComponent } from './walletchart-table.component';

describe('WalletchartComponent', () => {
  let component:  WalletchartComponent;
  let fixture: ComponentFixture< WalletchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WalletchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( WalletchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
