import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Exercises } from '../model/exercises';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {  }

  getQuestions(lession_id){
    const url = 'http://localhost:3000/api/lession';
    return this.http.post<Exercises>(url, {lession_id: lession_id});
  }
  updateLesson(userId, lessonId){
    const url = 'http://localhost:3000/api/user/lesson/learn';
    return this.http.post<string>(url, {userId: userId, lessonId: lessonId}, httpOptions);
  }
  updateRight(userId, right){
    const url = 'http://localhost:3000/api/user' + '/right';
    return this.http.post<string>(url, {userId: userId, right: right})
  }
  updateWrong(userId, wrong) {
    const url = 'http://localhost:3000/api/user/wrong';
    return this.http.post<string>(url, {userId: userId, wrong: wrong})
  }
}
