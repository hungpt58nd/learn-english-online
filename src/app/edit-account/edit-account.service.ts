import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserRes } from '../model/userRes';

@Injectable({
  providedIn: 'root'
})
export class EditAccountService {

  constructor(private http: HttpClient) {}

  editUser(username, email, password, oldId, oldUsername, oldEmail, oldPassword){
    const url = 'http://localhost:3000/api/editUser';
    return this.http.post<UserRes>(url, {
      username: username, 
      email: email, 
      password:password,
      oldId: oldId, oldUsername: oldUsername, 
      oldEmail: oldEmail, 
      oldPassword: oldPassword
    });
  }

  addMoney(username, code){
    const url = 'http://localhost:3000/api/addMoney';
    return this.http.post<UserRes>(url, {
      username: username,
      code: code
    })
  }

}
