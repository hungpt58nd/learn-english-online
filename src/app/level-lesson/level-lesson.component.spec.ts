import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelLessonComponent } from './level-lesson.component';

describe('LevelLessonComponent', () => {
  let component: LevelLessonComponent;
  let fixture: ComponentFixture<LevelLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
