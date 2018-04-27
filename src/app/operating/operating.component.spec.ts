import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingComponent } from './operating.component';

describe('OperatingComponent', () => {
  let component: OperatingComponent;
  let fixture: ComponentFixture<OperatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
