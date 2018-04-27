import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxlistTableComponent } from './txlist-table.component';

describe('txlisttableComponent', () => {
  let component:  TxlistTableComponent;
  let fixture: ComponentFixture< TxlistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TxlistTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( TxlistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
