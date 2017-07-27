import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedmoviesComponent } from './topratedmovies.component';

describe('TopratedmoviesComponent', () => {
  let component: TopratedmoviesComponent;
  let fixture: ComponentFixture<TopratedmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratedmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
