import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Topic} from '../model/topic';
import { ContentService } from "./content.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent{

  // user
  topicList: Array<Topic> = new Array<Topic>();
  learnedLesson: Array<string> = ['1','2','3'];
  
  constructor(private contentService: ContentService, private route: Router)  {
    this.contentService.getTopics().subscribe(
      res => {
        this.topicList = res.data;
        // console.log(this.topicList)
      },
      err => {
        alert("Lỗi trong khi lấy dữ liệu về");
      }
    );
  }


  onDoLesson(id: number, level: number) {
    // thieu api get
    let latestLesson = parseInt(this.learnedLesson[this.learnedLesson.length -1]) +1;
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
