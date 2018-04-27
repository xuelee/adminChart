import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthtopComponent } from './monthtop-table.component';

describe('monthtopComponent', () => {
  let component:  MonthtopComponent;
  let fixture: ComponentFixture< MonthtopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthtopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( MonthtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
