import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LessonFetcherService } from '../../service/lesson-fetcher.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();
  private results;
  
  constructor(private lessonFetcherService: LessonFetcherService) { 
  }

  ngOnInit() {
    this.subscriptions.add(this.lessonFetcherService.subscribableLessonData$.subscribe(results => {
        this.results = results.hello;
    }));
  }
}
