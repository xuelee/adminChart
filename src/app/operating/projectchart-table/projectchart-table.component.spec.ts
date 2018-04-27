import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectchartComponent } from './projectchart-table.component';

describe('ProjectchartComponent', () => {
  let component:  ProjectchartComponent;
  let fixture: ComponentFixture< ProjectchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ProjectchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
