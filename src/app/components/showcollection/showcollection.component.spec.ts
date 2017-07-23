import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcollectionComponent } from './showcollection.component';

describe('ShowcollectionComponent', () => {
  let component: ShowcollectionComponent;
  let fixture: ComponentFixture<ShowcollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
