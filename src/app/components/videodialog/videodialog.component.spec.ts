import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodialogComponent } from './videodialog.component';

describe('VideodialogComponent', () => {
  let component: VideodialogComponent;
  let fixture: ComponentFixture<VideodialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideodialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
