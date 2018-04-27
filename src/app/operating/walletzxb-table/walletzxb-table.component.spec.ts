import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletzxbComponent } from './walletzxb-table.component';

describe('walletzxbComponent', () => {
  let component:  WalletzxbComponent;
  let fixture: ComponentFixture< WalletzxbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WalletzxbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( WalletzxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
