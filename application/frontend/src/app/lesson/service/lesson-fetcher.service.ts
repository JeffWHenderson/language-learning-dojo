import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonFetcherService {
  subscribableLessonData$: Observable<any>;
  private updateSubject: Subject<any> = new Subject();

  // test code
  private counter: number = 0;
  private sentences: String[] = ["sentence 1", "sentence 2", "sentence 3"]

  constructor(private http: HttpClient) {
    this.subscribableLessonData$ = this.updateSubject.asObservable();
   }

  getLesson(lessonNumber: String): void {
    // TODO: make an http Call to make the object
    this.updateSubject.next(this.sentences[this.counter])

    this.http.get("baseURL/api/" + lessonNumber).subscribe(result => {
      console.log(result);
    })
    this.counter +=1 
  }
}