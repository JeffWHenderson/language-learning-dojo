import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonFetcherService {
  subscribableLessonData$: Observable<any>;
  private updateSubject: Subject<any> = new Subject();
  private BASE_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {
    this.subscribableLessonData$ = this.updateSubject.asObservable();
   }

  getLesson(language: String, lessonNumber: Number): void {
    // + lessonNumber
    this.http.get(`${this.BASE_URL}`).subscribe(result => {
      this.updateSubject.next(result);
    })
  }
}