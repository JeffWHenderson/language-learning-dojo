import { getTestBed, TestBed, inject } from '@angular/core/testing';
import { LessonFetcherService } from './lesson-fetcher.service';
import { Subscription } from 'rxjs';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('LessonFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LessonFetcherService]
    });
  });

  it('should be created', inject([LessonFetcherService], (service: LessonFetcherService) => {
    expect(service).toBeTruthy();
  }));

  it('should search by lesson Number', () => {
    let testBed: TestBed = getTestBed();
    let lessonFetcherService: LessonFetcherService = testBed.get(LessonFetcherService);
    let httpMock = testBed.get(HttpTestingController);
    
    lessonFetcherService.getLesson("1");

    const request = httpMock.expectOne('baseURL/api/1');
    expect(request.request.method).toBe('GET');
    // when http call is done, mock return (happy, unhappy)
    // Happy expect an update subject to be updated async
  })
});
