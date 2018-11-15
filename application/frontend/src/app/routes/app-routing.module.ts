import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardsComponent } from '../lesson/components/flashcards/flashcards.component';
import { VideoComponent } from '../lesson/components/video/video.component';
import { SentenceListComponent } from '../lesson/components/sentence-list/sentence-list.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { DemoComponent } from '../demo/demo.component';

const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'flashcards', component: FlashcardsComponent },
    { path: 'video', component: VideoComponent },
    { path: 'sentences', component: SentenceListComponent },
    { path: 'demo', component: DemoComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }