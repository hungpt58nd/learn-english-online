import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Exercises } from '../model/exercises';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {  }

  getQuestions(lession_id){
    const url = 'http://localhost:3000/api/lession';
    return this.http.post<Exercises>(url, {lession_id: lession_id});
  }
  
}