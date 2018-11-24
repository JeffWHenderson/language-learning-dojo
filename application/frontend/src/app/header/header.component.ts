import { Component, OnInit } from '@angular/core';
import { LessonFetcherService } from '../lesson/service/lesson-fetcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Language Learning Dojo';
  language: String = "spanish";
  lessonNumber: Number = 1

  constructor(private lessonFetcherService: LessonFetcherService) { }

  ngOnInit() {
  }

  toggleLanguage() {
    if( this.language === "spanish"){
      this.language = "chinese"
    } else {
      this.language = "spanish"
    }
  }

  fetch() {
    this.lessonFetcherService.getLesson(this.language, this.lessonNumber);
  }
}
