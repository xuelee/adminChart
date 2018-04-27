import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {WalletoutTableComponent } from './walletout-table.component';

describe('CommentTableComponent', () => {
  let component: WalletoutTableComponent;
  let fixture: ComponentFixture<WalletoutTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletoutTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletoutTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
