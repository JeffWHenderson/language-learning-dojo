import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonFetcherService {
  subscribableLessonData$: Observable<any>;
  private updateSubject: Subject<any> = new Subject();

  constructor(private http: HttpClient) {
    this.subscribableLessonData$ = this.updateSubject.asObservable();
   }

  getLesson(lessonNumber: String): void {
    this.http.get("baseURL/api/" + lessonNumber).subscribe(result => {
      this.updateSubject.next(result);
    })
  }
}