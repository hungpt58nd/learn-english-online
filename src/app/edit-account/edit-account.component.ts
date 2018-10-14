import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EditAccountService } from "./edit-account.service";
import { User } from "../model/user";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  isLoadingEdit = false;
  // repassword: string;

  userInfo: User = new User();
  oldUserInfo: User = new User();

  constructor(private editAccountService: EditAccountService, private router: Router) {
    if (localStorage.getItem('user')){
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.oldUserInfo = JSON.parse(localStorage.getItem('user'));
    } else {
      this.router.navigate(['../account']);
    }
  }

  onEdit(){
    this.isLoadingEdit = true;
    this.editAccountService.editUser(
      this.userInfo.username,
      this.userInfo.email,
      this.userInfo.password,
      this.oldUserInfo.id,
      this.oldUserInfo.username,
      this.oldUserInfo.email,
      this.oldUserInfo.password
    ).subscribe(
      res => {
        if (res.status == "fail"){
          alert(res.message);
        } else {
          this.router.navigate(['']);
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        this.isLoadingEdit = false;
      }
    )
  }

  goHome(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
