import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelavgTableComponent } from './channelavg-table.component';

describe('CommentTableComponent', () => {
  let component: ChannelavgTableComponent;
  let fixture: ComponentFixture<ChannelavgTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelavgTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelavgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
