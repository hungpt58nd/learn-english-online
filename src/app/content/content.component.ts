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
        // console.log(this.topicList)
      },
      err => {
        alert('Lỗi trong khi lấy dữ liệu về');
      }
    );

    this.contentService.getUserInfo(1).subscribe( //default id user = 1
      res => {
        this.user = res;
        this.learnedLesson = this.user.data.lessions;

        localStorage.setItem('right', this.user.data.right.toString());
        localStorage.setItem('wrong', this.user.data.wrong.toString());

        localStorage.setItem('level_at', this.topicList
          .find(topic => topic.lessonList
            .find(lesson => lesson.id.toString() === this.learnedLesson[this.learnedLesson.length-1]) !== undefined).level.toString());

        localStorage.setItem('account_id', this.user.data.id.toString());
      },
      err => {
        alert("Error")
      }
    );
  }

  onDoLesson(id: number, level: number) {
    // thieu api get
    let latestLesson = parseInt(this.learnedLesson[this.learnedLesson.length - 1]) + 1;
    let lessonTitle = 'Lession 1';
    let levelTitle = 'Level 1';
    let findLevel = 1;
    if (id <= latestLesson) {
      this.route.navigate(['/lesson', id ]);
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
