import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { LessonModule } from './lesson/lesson.module';
import { AppRoutingModule } from './routes/app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    DemoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    LessonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
