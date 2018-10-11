import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {LessonListComponent} from './lesson-list/lesson-list.component';
import { AccountComponent } from "./account/account.component";

const routes: Routes = [
  { path: 'account', component: AccountComponent},
  { path: '', component: LessonListComponent, pathMatch: 'full' },
  { path: 'lesson/:id', component: QuestionComponent },
  { path: '**',  redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
