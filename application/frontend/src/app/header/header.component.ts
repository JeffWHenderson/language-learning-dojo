import { Component, OnInit } from '@angular/core';
import { LessonFetcherService } from '../lesson/service/lesson-fetcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Language Learning Dojo';

  constructor(private lessonFetcherService: LessonFetcherService) { }

  ngOnInit() {
  }

  fetch() {
    this.lessonFetcherService.getLesson("1");
  }
}
