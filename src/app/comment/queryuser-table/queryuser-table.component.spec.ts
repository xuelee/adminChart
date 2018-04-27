import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryuserTableComponent } from './queryuser-table.component';

describe('QueryuserTableComponent', () => {
  let component:  QueryuserTableComponent;
  let fixture: ComponentFixture< QueryuserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QueryuserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( QueryuserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
