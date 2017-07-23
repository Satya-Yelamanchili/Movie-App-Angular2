import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularshowsComponent } from './popularshows.component';

describe('PopularshowsComponent', () => {
  let component: PopularshowsComponent;
  let fixture: ComponentFixture<PopularshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
