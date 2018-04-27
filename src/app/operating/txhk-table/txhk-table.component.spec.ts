import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxhkComponent } from './txhk-table.component';

describe('TxhkComponent', () => {
  let component:  TxhkComponent;
  let fixture: ComponentFixture< TxhkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TxhkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( TxhkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
