import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { ContentComponent } from './content/content.component';
import { LessonContainerComponent } from './lesson-container/lesson-container.component';
import { LevelLessonComponent } from './level-lesson/level-lesson.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionComponent } from './question/question.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { ImageQuestionComponent } from './image-question/image-question.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StatisticalComponent,
    ContentComponent,
    LessonContainerComponent,
    LevelLessonComponent,
    QuestionComponent,
    LessonListComponent,
    ImageQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
