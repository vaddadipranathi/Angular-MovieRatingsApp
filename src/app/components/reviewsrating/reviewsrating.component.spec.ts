import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsratingComponent } from './reviewsrating.component';

describe('ReviewsratingComponent', () => {
  let component: ReviewsratingComponent;
  let fixture: ComponentFixture<ReviewsratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
