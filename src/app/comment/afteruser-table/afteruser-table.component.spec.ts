import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterUserTableComponent } from './afteruser-table.component';

describe('AfterUserTableComponent', () => {
  let component:  AfterUserTableComponent;
  let fixture: ComponentFixture< AfterUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AfterUserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AfterUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
