import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Levels } from '../model/levels';
import {User} from '../model/user';
import {UserRes} from '../model/userRes';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) {  }

  getTopics() {
    const url = 'http://localhost:3000/api/levels';
    return this.http.get<Levels>(url);
  }
  getUserInfo(id: number) {
    const url = 'http://localhost:3000/api/user/' + id;
    return this.http.get<UserRes>(url);
  }
  updateMoney(money: number, id: number) {
    const  url = 'http://localhost:3000/api/money';
    return this.http.post<UserRes>(url, {money: money, userId: id});
  }
}
