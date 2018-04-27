import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpuserComponent } from './expuser-table.component';

describe('ExpuserComponent', () => {
  let component:  ExpuserComponent;
  let fixture: ComponentFixture< ExpuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ExpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
