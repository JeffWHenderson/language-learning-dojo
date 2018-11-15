import { LessonModule } from './lesson.module';

describe('LessonModule', () => {
  let lessonModule: LessonModule;

  beforeEach(() => {
    lessonModule = new LessonModule();
  });

  it('should create an instance', () => {
    expect(lessonModule).toBeTruthy();
  });
});
