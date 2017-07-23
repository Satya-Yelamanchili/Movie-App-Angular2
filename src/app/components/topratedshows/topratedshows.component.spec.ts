import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedshowsComponent } from './topratedshows.component';

describe('TopratedshowsComponent', () => {
  let component: TopratedshowsComponent;
  let fixture: ComponentFixture<TopratedshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratedshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
