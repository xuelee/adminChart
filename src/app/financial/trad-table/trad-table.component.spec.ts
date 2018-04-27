import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradComponent } from './trad-table.component';

describe('TradComponent', () => {
  let component:  TradComponent;
  let fixture: ComponentFixture< TradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( TradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
