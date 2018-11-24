import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LessonFetcherService } from '../../service/lesson-fetcher.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
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
