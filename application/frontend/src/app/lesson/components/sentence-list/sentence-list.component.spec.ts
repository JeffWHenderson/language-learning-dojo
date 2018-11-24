import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceListComponent } from './sentence-list.component';
import { LessonFetcherService } from '../../service/lesson-fetcher.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SentenceListComponent', () => {
  let component: SentenceListComponent;
  let fixture: ComponentFixture<SentenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SentenceListComponent ],
      providers: [LessonFetcherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
