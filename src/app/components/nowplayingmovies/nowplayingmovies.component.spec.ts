import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowplayingmoviesComponent } from './nowplayingmovies.component';

describe('NowplayingmoviesComponent', () => {
  let component: NowplayingmoviesComponent;
  let fixture: ComponentFixture<NowplayingmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowplayingmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowplayingmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
