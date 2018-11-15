import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonModule } from './lesson/lesson.module';
import { VideoComponent } from './lesson/components/video/video.component';
import { FlashcardsComponent } from './lesson/components/flashcards/flashcards.component';
import { SentenceListComponent } from './lesson/components/sentence-list/sentence-list.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    LessonModule,
    AppRoutingModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
