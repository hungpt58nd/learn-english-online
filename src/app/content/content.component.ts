import { Component, OnInit } from '@angular/core';
import {Lesson} from '../model/lesson';
import {Topic} from '../model/topic';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  lessonList: Array<Lesson>;
  topicList: Array<Topic>;
  topic: Topic;
  lesson: Lesson;

  constructor() {
    this.topic = new Topic();
    this.lesson = new Lesson();
  }

  ngOnInit() {
    this.lesson.imageLink = 'url(../../assets/image/EMO1.png)';
    this.lesson.title = 'Cơ bản 1';
    this.lessonList = [this.lesson, this.lesson, this.lesson];
    this.topic.level = 1;
    this.topic.description = 'Người mới học bắt đầu tại level 1';
    this.topic.title = 'Level 1';
    this.topic.lessonList = this.lessonList;
    const topic2 = new Topic();
    topic2.level = 2;
    topic2.title = 'Level 2';
    topic2.description = 'Mỗi cố gắng nhỏ mỗi ngày';
    topic2.lessonList = this.lessonList;
    this.topicList = [this.topic, topic2];
  }

}
