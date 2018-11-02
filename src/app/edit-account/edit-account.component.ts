import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EditAccountService } from "./edit-account.service";
import { User } from "../model/user";
import {current} from 'codelyzer/util/syntaxKind';

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
  bonusCode: String = '';

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
          let tmp = res.data;
          if(this.bonusCode.length > 0){
            this.editAccountService.addMoney(this.userInfo.username, this.bonusCode).subscribe(
              res => {
                if(res.status == "fail"){
                  alert('Code Invalid');
                } else {
                  alert(res.message + ' added to your account');
                  let currentMoney = localStorage.getItem('money');
                  let money = Number(currentMoney) + Number(res.message);
                  localStorage.setItem('money', money.toString());
                }
              }
            );
          }
          localStorage.setItem('user', JSON.stringify(tmp));
          this.router.navigate(['']);
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
