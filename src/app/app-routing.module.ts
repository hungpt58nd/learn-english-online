import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {LessonListComponent} from './lesson-list/lesson-list.component';

const routes: Routes = [
  { path: '', component: QuestionComponent, pathMatch: 'full' },
  { path: 'lesson', component: LessonListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
