import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlduserTableComponent } from './olduser-table.component';

describe('OlduserTableComponent', () => {
  let component:  OlduserTableComponent;
  let fixture: ComponentFixture< OlduserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OlduserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( OlduserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
