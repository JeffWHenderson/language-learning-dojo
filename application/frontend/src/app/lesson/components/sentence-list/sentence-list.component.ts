import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LessonFetcherService } from '../../service/lesson-fetcher.service';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.css']
})
export class SentenceListComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();
  private results;
  
  constructor(private lessonFetcherService: LessonFetcherService) { 
  }

  ngOnInit() {
      this.subscriptions.add(this.lessonFetcherService.subscribableLessonData$.subscribe(results => {
        this.results = results.hello;
    }));
  }

  fetch() {
    this.lessonFetcherService.getLesson("1");
  }
}
