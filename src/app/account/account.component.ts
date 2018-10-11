import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AccountService } from "./account.service";
import { User } from "../model/user";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  isLoadingLogin = false;
  isLoadingRegister = false;
  isLogin = true;
  // repassword: string;

  userInfo: User = new User();

  constructor(private accountService: AccountService, private router: Router) { }

  onLogin(){
    this.isLoadingLogin = true;
    this.accountService.login(this.userInfo.email, this.userInfo.password).subscribe(
      res => {
        if (res.status == "fail"){
          alert(res.message);
        } else {
          this.router.navigate(['']);
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        this.isLoadingLogin = false;
      }
    )
  }

  onRegister(){
    this.isLoadingRegister = true;
    this.accountService.register(this.userInfo.username ,this.userInfo.email, this.userInfo.password).subscribe(
      res => {
        if (res.status == "fail"){
          alert(res.message);
        } else {
          this.router.navigate(['']);
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        this.isLoadingRegister = false;
      }
    )
  }

  ngOnInit() {
  }

}
