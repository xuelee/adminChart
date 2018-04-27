import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletvipComponent } from './walletvip-table.component';

describe('WalletvipComponent', () => {
  let component:  WalletvipComponent;
  let fixture: ComponentFixture< WalletvipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WalletvipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( WalletvipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
