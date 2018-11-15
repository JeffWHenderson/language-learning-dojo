import { TestBed, inject } from '@angular/core/testing';

import { LessonFetcherService } from './lesson-fetcher.service';

describe('LessonFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonFetcherService]
    });
  });

  it('should be created', inject([LessonFetcherService], (service: LessonFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
