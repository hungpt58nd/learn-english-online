import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { ContentComponent } from './content/content.component';
import { LessonContainerComponent } from './lesson-container/lesson-container.component';
import { LevelLessonComponent } from './level-lesson/level-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StatisticalComponent,
    ContentComponent,
    LessonContainerComponent,
    LevelLessonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
