import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentenceListComponent } from './components/sentence-list/sentence-list.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { VideoComponent } from './components/video/video.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    VideoComponent,
    SentenceListComponent,
    FlashcardsComponent
  ],
  exports: [
    VideoComponent,
    FlashcardsComponent,
    SentenceListComponent,
  ],
  providers: [ HttpClient ],
})
export class LessonModule { }
