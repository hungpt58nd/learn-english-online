import {Component, Input, OnInit} from '@angular/core';
import { ToolbarService } from "./toolbar.service";
import { User } from "../model/user";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLogin = false;

  userInfo: User = new User();
  @Input() levelAt: string
  constructor(private toolbarService: ToolbarService) { 
    if (localStorage.getItem('user')){
      let user = JSON.parse(localStorage.getItem('user'));
      toolbarService.login(user.emai, user.password).subscribe(
        res => {
          if (res.status == "fail"){
            localStorage.removeItem('user');
            this.isLogin = false;
            alert(res.message);
          } else{
            localStorage.setItem('user', JSON.stringify(res.data));
            this.isLogin = true;
          }
        }
      );
    }
  }

  onLogin(){
    this.toolbarService.login(this.userInfo.email, this.userInfo.password).subscribe(
      res => {
        if (res.status == "fail"){
          this.isLogin = false;
          alert(res.message);
        } else {
          this.isLogin = true;
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        this.userInfo = null;
      }
    )
  }

  onRegister(){
    this.toolbarService.register(this.userInfo.username ,this.userInfo.email, this.userInfo.password).subscribe(
      res => {
        if (res.status == "fail"){
          this.isLogin = false;
          alert(res.message);
        } else {
          this.isLogin = true;
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        this.userInfo = null;
      }
    )
  }

  ngOnInit() {
  }
  
  onLogout() {
    alert('Đăng xuất');
    localStorage.removeItem('user');
    this.isLogin = false;
  }

  onUserSetting() {
    alert('Setting');
  }
}
