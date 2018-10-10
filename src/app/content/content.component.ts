import { Component, OnInit } from '@angular/core';
import {Lesson} from '../model/lesson';
import {Topic} from '../model/topic';

const mockData = [
  {
    level: 1,
    title: 'Level 1',
    description: 'Người mới học bắt đầu từ level 1',
    lessonList: [
      {
        id: 0,
        imageLink: 'url(../../assets/image/EMO1.png)',
        title: 'Cơ bản 1'
      },
      {
        id: 1,
        imageLink: 'url(../../assets/image/EMO1.png)',
        title: 'Cơ bản 2'
      },
      {
        id: 2,
        imageLink: 'url(../../assets/image/EMO1.png)',
        title: 'Cơ bản 3'
      }
    ]
  },
  {
    level: 2,
    title: 'Level 2',
    description: 'Cố gắng nhỏ mỗi ngày',
    lessonList: [
      {
        id: 3,
        imageLink: 'url(../../assets/image/lession1.png)',
        title: 'Động vật'
      },
      {
        id: 4,
        imageLink: 'url(../../assets/image/lession2.png)',
        title: 'Món ăn'
      },
      {
        id: 5,
        imageLink: 'url(../../assets/image/lession3.png)',
        title: 'Gia đình'
      }
    ]
  }
];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  lessonList: Array<Lesson>;
  topicList: Array<Topic> = new Array<Topic>();
  topic: Topic;
  lesson: Lesson;
  learnedLesson: string[];
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
    this.topicList = mockData;
    this.learnedLesson = localStorage.getItem('learnedLesson') ? localStorage.getItem('learnedLesson').split(',') : [];
  }

  onDoLesson(id: number) {
    localStorage.setItem('lesson_id', id.toString());
    window.open('/lesson', '_parent');
  }

}
