import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {LessonListComponent} from './lesson-list/lesson-list.component';

const routes: Routes = [
  { path: '', component: LessonListComponent, pathMatch: 'full' },
  { path: 'lesson/:id', component: QuestionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
