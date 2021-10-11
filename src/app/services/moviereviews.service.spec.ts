import { TestBed } from '@angular/core/testing';

import { MoviereviewsService } from './moviereviews.service';

describe('MoviereviewsService', () => {
  let service: MoviereviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviereviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
