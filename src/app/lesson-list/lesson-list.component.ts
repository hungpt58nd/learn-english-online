import {Component, Input, OnInit} from '@angular/core';
import { User } from "../model/user"

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  @Input() levelAt: string;
  constructor() { 
    // if (localStorage.getItem('user')){
    //   let user = JSON.parse(localStorage.getItem('user'));
    //   lessonListService.login(user.emai, user.password).subscribe(
    //     res => {
    //       if (res.status == "fail"){
    //         localStorage.removeItem('user');
    //         this.isLogin = false;
    //         this.userInfo = null;
    //         alert(res.message);
    //       } else{
    //         localStorage.setItem('user', JSON.stringify(res.data));
    //         this.userInfo = res.data;
    //         this.isLogin = true;
    //       }
    //     }
    //   );
    // }
  }

  ngOnInit() {
  }

}
