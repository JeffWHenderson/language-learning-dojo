import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentenceListComponent } from './components/sentence-list/sentence-list.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoComponent,
    SentenceListComponent,
    FlashcardsComponent
  ],
  exports: [
    VideoComponent,
    FlashcardsComponent,
    SentenceListComponent
  ]
})
export class LessonModule { }
