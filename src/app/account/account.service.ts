import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserRes } from '../model/userRes';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}
  
  login(email, password){
    const url = 'http://localhost:3000/api/login';
    return this.http.post<UserRes>(url, {email: email, password: password});
  }

  register(username, email, password){
    const url = 'http://localhost:3000/api/register';
    return this.http.post<UserRes>(url, {username: username, email: email, password:password});
  }
  
}
