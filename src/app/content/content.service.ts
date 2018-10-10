import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Levels } from '../model/levels';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) {  }

  getTopics(){
    const url = 'http://localhost:3000/api/levels';
    return this.http.get<Levels>(url);
  }
  
}
