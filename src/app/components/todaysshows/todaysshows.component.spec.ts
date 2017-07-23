import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysshowsComponent } from './todaysshows.component';

describe('TodaysshowsComponent', () => {
  let component: TodaysshowsComponent;
  let fixture: ComponentFixture<TodaysshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
