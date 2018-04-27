import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchartTableComponent } from './userchart-table.component';

describe('UserchartTableComponent', () => {
  let component:  UserchartTableComponent;
  let fixture: ComponentFixture< UserchartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserchartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( UserchartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
