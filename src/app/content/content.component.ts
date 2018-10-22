import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import {Topic} from '../model/topic';
import { ContentService } from "./content.service";
import {User} from '../model/user';
import {UserRes} from '../model/userRes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent{

  // user
  user: UserRes = new UserRes();
  topicList: Array<Topic> = new Array<Topic>();
  learnedLesson: Array<string> = [];

  constructor(private contentService: ContentService, private route: Router)  {
    this.contentService.getTopics().subscribe(
      res => {
        this.topicList = res.data;
      },
      err => {
        alert('Lỗi trong khi lấy dữ liệu về');
      }
    );

    let userId = JSON.parse(localStorage.getItem('user')).id;

    this.contentService.getUserInfo(Number(userId)).subscribe(
      res => {
        this.user = res;
        this.learnedLesson = this.user.data.lessions;

        localStorage.setItem('right', this.user.data.right.toString());
        localStorage.setItem('wrong', this.user.data.wrong.toString());
        localStorage.setItem('money', this.user.data.money.toString())

        if (this.learnedLesson.length === 0){
          localStorage.setItem('level_at', '1');
        } else {
          localStorage.setItem('level_at', this.topicList
            .find(topic => topic.lessonList
              .find(lesson => lesson.id.toString() === this.learnedLesson[this.learnedLesson.length-1]) !== undefined).level.toString());
        }
        localStorage.setItem('account_id', this.user.data.id.toString());
      },
      err => {
        alert("Error")
      }
    );
  }

  onDoLesson(id: number, level: number) {
    // thieu api get
    let latestLesson;
    if (this.learnedLesson.length === 0) {
      latestLesson = 1;
    } else {
      latestLesson = parseInt(this.learnedLesson[this.learnedLesson.length - 1]) + 1;
    }

    let lessonTitle = 'Lession 1';
    let levelTitle = 'Level 1';
    let findLevel = 1;
    const currentMoney = this.user.data.money - 10000;
    if (id <= latestLesson) {
      if (id < latestLesson) {
        this.route.navigate(['/lesson', id ]);
      } else  {
        if (currentMoney <= 0) {
          alert('Vui lòng nạp thêm tiền để tiếp tục học');
        } else {
          this.contentService.updateMoney(currentMoney, this.user.data.id).subscribe();
          this.route.navigate(['/lesson', id ]);
        }
      }
    } else {
      for (let i = 0; i < this.topicList.length; i++) {
        let lessons = this.topicList[i].lessonList;
        for (let j = 0; j < lessons.length; j++) {
          if(lessons[j].id == latestLesson){
            lessonTitle = lessons[j].title;
            levelTitle = this.topicList[i].title;
            findLevel = this.topicList[i].level;
            break;
          }
        }
      }
      if (level !== findLevel) {
        alert('Hãy học với level: ' + levelTitle);
      } else {
        alert('Hãy học với bài: ' + lessonTitle);
      }
    }
  }
}
