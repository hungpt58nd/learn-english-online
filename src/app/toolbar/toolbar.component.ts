import {Component, Input, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../model/user";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLogin = false;

  userInfo: User = new User();
  @Input() levelAt: string;

  constructor(private router: Router) { 
    if (localStorage.getItem('user')){
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.isLogin = true;
    } else {
      this.isLogin = false;
      this.router.navigate(['../account']);
    }
  }

  ngOnInit() {
  }
  
  onLogout() {
    this.router.navigate(['../account']);
    localStorage.removeItem('user');
    this.isLogin = false;
  }

  onUserSetting() {
    this.router.navigate(['../editAccount']);
  }
}
