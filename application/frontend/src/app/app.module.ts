import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonModule } from './lesson/lesson.module';
import { VideoComponent } from './lesson/components/video/video.component';
import { FlashcardsComponent } from './lesson/components/flashcards/flashcards.component';
import { SentenceListComponent } from './lesson/components/sentence-list/sentence-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LessonModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
