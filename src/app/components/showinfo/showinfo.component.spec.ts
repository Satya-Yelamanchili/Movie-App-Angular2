import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowinfoComponent } from './showinfo.component';

describe('ShowinfoComponent', () => {
  let component: ShowinfoComponent;
  let fixture: ComponentFixture<ShowinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
